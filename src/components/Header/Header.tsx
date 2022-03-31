import React, {FC} from 'react';
import {HeaderWrapper, HeaderNavItems, NavItem, AddDishButton, Icon, Flex} from './Header.styled';
import RandomIcon from 'assets/icons/random-icon.svg';
import FavouritesIcon from 'assets/icons/fovourites-icon.svg';
import PlusIcon from 'assets/icons/plus-icon.svg';
import {Routes, Route, Link, useParams, useLocation} from "react-router-dom";

const Header: FC = () => {

  const {pathname} = useLocation();

  return (
    <>
      <HeaderWrapper>
        <Flex>
        <HeaderNavItems>
          <NavItem to={'/'}>
            <Icon src={RandomIcon}/>
            Random dish
          </NavItem>
          <NavItem to={'/favourites'}>
            <Icon src={FavouritesIcon}/>
            Favourites
          </NavItem>
        </HeaderNavItems>
        {
          pathname === '/favourites' &&
            <AddDishButton to={'/add-dish'}>
                <Icon marginRight={'4px'} src={PlusIcon}/>
                Add dish
            </AddDishButton>
        }
        </Flex>
      </HeaderWrapper>
    </>
  );
};

export default Header;