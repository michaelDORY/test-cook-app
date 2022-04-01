import React, {FC, useState} from "react";
import {Flex, NoFavouritesBoundary, NoFavouritesImage} from "./FavouritesContainer.styled";
import DishCard from "components/DishCard/DishCard";
import uniqid from 'uniqid';
import {FAVOURITES_KEY} from "constraints";
import {IDish, IFavourites} from "types/types";
import ZeroImage from 'assets/images/zero.png';

export const FavouritesContainer: FC = () => {

  const getDishes: () => IDish[] = () => {
    const parsedFavourites: IFavourites = JSON.parse(localStorage.getItem(FAVOURITES_KEY) || JSON.stringify({dishes: []}));
    return parsedFavourites.dishes;
  }

  const [favourites, setFavourites] = useState<IDish[]>(() => getDishes())

  const deleteFromFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newFavourites = getDishes();
    setFavourites(newFavourites)
  }

  return (
    <>
      <Flex>
        {
          favourites.length === 0 ?
            <NoFavouritesBoundary>
              <h2 style={{marginBottom: '20px'}}>Sorry, you don't have any favourites(</h2>
              <NoFavouritesImage src={ZeroImage} alt={'noFavourites'}/>
            </NoFavouritesBoundary> :
          favourites.map(item => {
            return (
              <DishCard
                key={uniqid()}
                changeable={false}
                description={item.description}
                heading={item.heading}
                image={item.img}
                isDefaultFavourite={true}
                deleteFromFavourites={deleteFromFavourites}
              />
            );
          })
        }
      </Flex>
    </>
  );
};