import React, {useEffect, useRef, useState} from 'react';
import {
  CardBase,
  CardContent,
  CardDescription,
  CardHeading,
  DishImage,
  IconButton,
  Line,
  Loader,
  NextButton
} from "components/DishCard/DishCard.styled";
import ImagePlaceholder from "assets/images/placeholder.png";
import YellowIconStarSource from "assets/icons/yellow-star-icon.svg";
import IconStarSource from "assets/icons/star-icon.svg";
import {IDish, IFavourites} from "types/types";
import {DISH_KEY, FAVOURITES_KEY} from "constraints";
import {useLocation} from "react-router-dom";
import {useQuery} from "utils/queries";

interface DishCardProps {
  loading?: boolean,
  changeable: boolean
  heading: string,
  description: string,
  image?: string,
  isDefaultFavourite: boolean,
  dishHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  deleteFromFavourites?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const DishCard: (props: DishCardProps) => JSX.Element = (props: DishCardProps) => {

  const {isTablet} = useQuery();

  const isFavourite = useRef<boolean>(props.isDefaultFavourite);
  const [isYellowStar, setYellowStar] = useState(props.isDefaultFavourite);
  const location = useLocation();

  useEffect(() => {
    localStorage.removeItem(DISH_KEY)
  }, [location.pathname])

  //dish changing
  useEffect(() => {
    isFavourite.current = props.isDefaultFavourite;
    setYellowStar(props.isDefaultFavourite);
  }, [props])

  const favouriteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    isFavourite.current = !isFavourite.current;
    setYellowStar((isYellow) => !isYellow);

    const currentDish: IDish = {
      heading: props.heading,
      description: props.description,
      img: props.image
    }
    const favourites: IFavourites = JSON.parse(localStorage.getItem(FAVOURITES_KEY) || JSON.stringify({dishes: []}));

    if (isFavourite.current) {
      favourites.dishes.unshift(currentDish);
      localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));

    } else if (favourites.dishes.length !== 0) {
      favourites.dishes = [...favourites.dishes.filter(item => JSON.stringify(item) !== JSON.stringify(currentDish))];
      localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
    }
  }

  return (
    <CardBase isTablet={isTablet}>
      {
        props.loading ?
          <Loader ariaLabel="loading-indicator"/> :
          <>
            <DishImage src={props.image || ImagePlaceholder} isTablet={isTablet} />
            <CardContent isTablet={isTablet}>
              <Line>
                <CardHeading isTablet={isTablet}>
                  {props.heading}
                </CardHeading>
                <IconButton
                  src={isYellowStar ? YellowIconStarSource : IconStarSource}
                  isTablet={isTablet}
                  onClick={(e) => {
                    favouriteHandler(e);
                    props.deleteFromFavourites && props.deleteFromFavourites(e);
                  }}
                />
              </Line>
              <CardDescription>
                {props.description}
              </CardDescription>
              {
                props.changeable &&
                  <NextButton onClick={props.dishHandler}>
                      Next dish
                  </NextButton>
              }
            </CardContent>
          </>
      }

    </CardBase>
  );
};

export default DishCard;