import styled from "styled-components";

interface NavItemProps {
  isOnFocus: boolean,
}

interface IconProps {
  src: string,
  isTablet?: boolean,
  marginRight?: string
}

interface AddDishButtonProps {
  marginLeft?: string,
  marginTop?: string,
  center?: boolean,
  isTablet?: boolean
}

export const HeaderNavItems = styled.div`
  width: 350px;
  margin-left: calc(50%);
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Flex = styled.div`
  display: flex;
`;

export const HeaderWrapper = styled.div`
  padding: 20px 30px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.23) 100%);
`;

export const NavItem = styled.button<NavItemProps>`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  height: 44px;
  color: ${props => props.isOnFocus && props.theme.color.primary};
  text-shadow: ${props => props.isOnFocus && '0 4px 4px rgba(153, 52, 169, 0.31)'};
  background: transparent;
  
  &:hover:not(:focus) > img {
    transform: ${props => !props.isOnFocus && 'rotate(360deg)'};
    transition: transform 0.6s ease-in-out;
  }
  
  &:hover, &:focus {
    color: ${props => props.theme.color.primary};
  }

  &:focus {
    text-shadow: 0 4px 4px rgba(153, 52, 169, 0.31);
  }
`;

export const AddDishButton = styled.button<AddDishButtonProps>`
  margin: ${props => props.center ? '0 auto': 0};
  margin-top: ${props => props.marginTop ? props.marginTop : 0};
  display: flex;
  align-items: center;
  padding: ${props => props.isTablet ? '5px 15px' : '10px 33px'};
  border-radius: ${props => props.theme.box.borderRadius};
  background: ${props => props.disabled ? 'grey' : props.theme.box.gradient};
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  transition: 0.5s;
  background-size: 200% auto;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export const Icon = styled.img<IconProps>`
  object-fit: cover;
  margin-right: ${props => props.marginRight ? props.marginRight : '8px' };
  width: ${props => props.isTablet ? '35px' : '24px'};
  height: ${props => props.isTablet ? '35px' : '24px'};
`;