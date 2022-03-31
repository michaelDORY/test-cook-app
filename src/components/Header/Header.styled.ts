import styled from "styled-components";
import {Link} from 'react-router-dom';

interface IconProps {
  src: string,
  marginRight?: string
}

export const HeaderNavItems = styled.div`
  width: 300px;
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

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 44px;
`;

export const AddDishButton = styled(Link)`
  margin-left: -60px;
  display: flex;
  align-items: center;
  padding: 10px 33px;
  border-radius: ${props => props.theme.box.borderRadius};
  background: ${props => props.theme.color.primary};
  color: #fff;
  font-size: 18px;
  filter: ${props => props.theme.box.boxShadow};
`;

export const Icon = styled.span<IconProps>`
  display: inline-block;
  background: url(${props => props.src}) center no-repeat;
  margin-right: ${props => {return props.marginRight ? props.marginRight : '8px' }};
  width: 24px;
  height: 24px;
`;