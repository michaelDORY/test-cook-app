import React, {FC, useState} from 'react';
import {Flex, HeaderWrapper, HeaderNavItems, NavItem, AddDishButton, Icon} from './Header.styled';
import RandomIcon from 'assets/icons/random-icon.svg';
import FavouritesIcon from 'assets/icons/fovourites-icon.svg';
import PlusIcon from 'assets/icons/plus-icon.svg';
import {BrowserRouter, Link, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import ModalAddDish from "components/ModalAddDish/ModalAddDish";

const Header: FC = () => {

  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOnOpenModal = () => {
    setModalOpen(true);
  }

  const handleOnCloseModal = (e?: React.MouseEvent | React.KeyboardEvent) => {
    setModalOpen(false);
    navigate('/favourites');
  }

  const {pathname} = useLocation();

  return (
    <>
      <HeaderWrapper>
        <Flex>
        <HeaderNavItems>
          <Link to={'/'}>
            <NavItem isOnFocus={pathname === '/'}>
              <Icon src={RandomIcon}/>
              Random dish
            </NavItem>
          </Link>
          <Link to={'/favourites'}>
            <NavItem isOnFocus={pathname === '/favourites'}>
              <Icon src={FavouritesIcon}/>
              Favourites
            </NavItem>
          </Link>
        </HeaderNavItems>
        {
          pathname === '/favourites' &&
            <Link onClick={handleOnOpenModal} to={pathname + '/add-dish'}>
                <AddDishButton marginLeft={'-60px'}>
                    <Icon marginRight={'4px'} src={PlusIcon}/>
                    Add dish
                </AddDishButton>
            </Link>
        }
        </Flex>
      </HeaderWrapper>
      <Routes>
        <Route path={'/favourites/add-dish'} element={
          <ModalAddDish isOpen={isModalOpen} onRequestClose={handleOnCloseModal} toFavouritesPage={handleOnCloseModal}/>
        }/>
      </Routes>
    </>
  );
};

export default Header;