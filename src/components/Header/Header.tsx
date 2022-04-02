import React, {FC, useEffect, useState} from 'react';
import {Flex, HeaderWrapper, HeaderNavItems, NavItem, AddDishButton, Icon} from './Header.styled';
import RandomIcon from 'assets/icons/random-icon.svg';
import FavouritesIcon from 'assets/icons/fovourites-icon.svg';
import PlusIcon from 'assets/icons/plus-icon.svg';
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import ModalAddDish from "components/ModalAddDish/ModalAddDish";
import {useQuery} from "utils/queries";

// const {ReactComponent: RandomIcon} = require('assets/icons/random-icon.svg')

const Header: FC = () => {

  const {isTablet} = useQuery();

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
  
  useEffect(() => {
    pathname.includes('add-dish') && setModalOpen(true)
  }, [pathname])

  return (
    <>
      <HeaderWrapper>
        <Flex>
          <HeaderNavItems>
            <Link to={'/'}>
              <NavItem isOnFocus={pathname === '/'}>
                <Icon src={RandomIcon} isTablet={isTablet} />
                {
                  isTablet || 'Random dish'
                }
              </NavItem>
            </Link>
            <Link to={'favourites'}>
              {
                <NavItem isOnFocus={pathname === '/favourites'}>
                  <Icon src={FavouritesIcon} isTablet={isTablet}/>
                  {
                    isTablet || 'Favourites'
                  }
                </NavItem>
              }
            </Link>
          </HeaderNavItems>
          {
            pathname === '/favourites' &&
              <Link onClick={handleOnOpenModal} to={pathname + '/add-dish'}>
                  <AddDishButton marginLeft={isTablet ? '0' : '-60px'} isTablet={isTablet}>
                      <Icon marginRight={'4px'} src={PlusIcon} isTablet={isTablet}/>
                    {
                      isTablet || 'Add dish'
                    }
                  </AddDishButton>
              </Link>
          }
        </Flex>
      </HeaderWrapper>
      <Routes>
        <Route path={'favourites/add-dish'} element={
          <ModalAddDish isOpen={isModalOpen} onRequestClose={handleOnCloseModal} toFavouritesPage={handleOnCloseModal}/>
        }/>
      </Routes>
    </>
  );
};

export default Header;