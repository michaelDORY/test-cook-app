import React, {FC, useEffect, useState} from 'react';
import DishCard from 'components/DishCard/DishCard';
import {CardContainer} from './RandomDishContainer.styled';
import {useLocalStorage} from "hooks/useLocalStorage";
import {getRandomDish} from "server/http-requests";
import {IDish, IFavourites} from "types/types";
import {toast} from "react-toastify";
import {DISH_KEY} from 'constraints';

const RandomDishContainer: FC = () => {

  const [dish, setDish] = useLocalStorage(DISH_KEY, null);
  const [loading, setLoading] = useState(false);

  //first dish rendering
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem(DISH_KEY) || '')) {
      try {
        setLoading(true);
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
      } catch (e) {
        toast('Sorry, something went wrong(');
        console.log('error')
      } finally {
        setLoading(false);
      }
    }
  }, [setDish])

  const dishHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      setLoading(true);
      const responseDish = await getRandomDish();
      const myDish: IDish = {
        heading: responseDish.strMeal,
        description: responseDish.strInstructions,
        img: responseDish.strMealThumb
      }
      setDish(myDish);
    } catch (e) {
      toast('Sorry, something went wrong(');
    } finally {
      setLoading(false)
    }
  }

  return (
    <CardContainer>
      <DishCard
        loading={loading}
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