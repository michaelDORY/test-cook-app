import React, {useEffect, useState} from 'react';
import {DescriptionArea, HeadingInput, Modal} from './ModalAddDish.styled';
import ReactModal from "react-modal";
import {CardBase, CardContent, DishImage} from 'components/DishCard/DishCard.styled';
import ImagePlaceholder from "assets/images/placeholder.png";
import {AddDishButton, Icon} from 'components/Header/Header.styled';
import PlusIcon from "assets/icons/plus-icon.svg";
import {IDish, IFavourites} from "types/types";
import {FAVOURITES_KEY} from "constraints";
import {useQuery} from "utils/queries";

interface ModalAddDishProps extends ReactModal.Props {
  toFavouritesPage: () => void
}

const ModalAddDish = (props: ModalAddDishProps) => {

  const {isTablet} = useQuery();

  const [heading, setHeading] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isHeadingDirty, setHeadingDirty] = useState<boolean>(false);
  const [isDescriptionDirty, setDescriptionDirty] = useState<boolean>(false);
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    if (!description || !heading) {
      setFormValid(false)
    } else if (!!heading && !!description) {
      setFormValid(true)
    }
  }, [heading, description])

  const changeHeading = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeading(e.target.value);
  }

  const changeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }

  const blurHandler = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    switch (e.target.name) {
      case ('heading'):
        setHeadingDirty(true);
        break;
      case ('description') :
        setDescriptionDirty(true)
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormValid) {
      const dish: IDish = {
        heading,
        description,
      }

      const favourites: IFavourites = JSON.parse(localStorage.getItem(FAVOURITES_KEY) || JSON.stringify({dishes: []}));
      favourites.dishes.unshift(dish);
      localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));

      props.toFavouritesPage && props.toFavouritesPage();
    }
  }

  return (
    <Modal {...props}>
      <form onSubmit={handleSubmit}>
        <CardBase isTablet={isTablet}>
          <DishImage src={ImagePlaceholder} isTablet={isTablet} />
          <CardContent>
            <HeadingInput
              isCorrect={(!!heading && isHeadingDirty) || !isHeadingDirty}
              name={'heading'}
              value={heading}
              onChange={changeHeading}
              onBlur={blurHandler}
              placeholder={'Pizza...'}/>
            <DescriptionArea
              isCorrect={(!!description && isDescriptionDirty) || !isDescriptionDirty}
              name={'description'}
              value={description}
              onChange={changeDescription}
              onBlur={blurHandler}
              placeholder={'Step 1...'}/>
            <AddDishButton disabled={!isFormValid} type={'submit'} marginTop={'20px'} center={true}>
              <Icon marginRight={'4px'} src={PlusIcon}/>
              Add dish
            </AddDishButton>
          </CardContent>
        </CardBase>
      </form>
    </Modal>
  );
};

export default ModalAddDish;