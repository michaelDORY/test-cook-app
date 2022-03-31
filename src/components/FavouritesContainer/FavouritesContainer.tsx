import React, {FC, useState} from "react";
import {Flex} from "./FavouritesContainer.styled";
import {IFavourites, IDish} from "types/types";
import DishCard from "components/DishCard/DishCard";
import uniqid from 'uniqid';
import {FAVOURITES_KEY} from "constraints";

export const FavouritesContainer: FC = () => {

  const getDishes: () => IDish[] = () => {
    const parsedFavourites: IFavourites = JSON.parse(localStorage.getItem(FAVOURITES_KEY) || JSON.stringify({dishes: []}));
    return parsedFavourites.dishes;
  }

  const [favourites, setFavourites] = useState<IDish[]>(() => getDishes())

  const deleteFromFavourites = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newFavourites = getDishes();
    console.log(newFavourites)
    setFavourites(newFavourites)
  }

  return (
    <Flex>
      {
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
  );
};