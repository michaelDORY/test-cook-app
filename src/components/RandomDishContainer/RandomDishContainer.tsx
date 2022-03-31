import React, {FC, useEffect, useState} from 'react';
import DishCard from 'components/DishCard/DishCard';
import {CardContainer} from './RandomDishContainer.styled';
import {useLocalStorage} from "hooks/useLocalStorage";
import {getRandomDish} from "server/http-requests";
import {IDish, IFavourites} from "types/types";
import {toast} from "react-toastify";

const RandomDishContainer: FC = () => {

  const DISH_KEY: string = 'currentDish';

  //const [isFavourite, setFavourite] = useState<boolean>(false);

  const [dish, setDish] = useLocalStorage(DISH_KEY, null);

  //first dish rendering
  useEffect(() => {
    try {
      if (!localStorage.getItem(DISH_KEY)) {
        getRandomDish().then(
          dish => {
            const myDish: IDish = {
              heading: dish.strMeal,
              description: dish.strInstructions,
              img: dish.strMealThumb
            }
            setDish(myDish);
          }
        );
      }
    } catch (e) {
      toast('Sorry, something went wrong(')
    }
  }, [setDish])

  const dishHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const responseDish = await getRandomDish();
    const myDish: IDish = {
      heading: responseDish.strMeal,
      description: responseDish.strInstructions,
      img: responseDish.strMealThumb
    }
    setDish(myDish);
  }

  return (
    <CardContainer>
      <DishCard
        changeable={true}
        description={dish?.description}
        heading={dish?.heading}
        image={dish?.img}
        isDefaultFavourite={false}
        dishHandler={dishHandler}
      />
    </CardContainer>
  )
}

export default RandomDishContainer;