import styled from "styled-components";
import {MutatingDots} from "react-loader-spinner";

interface IconButtonProps {
  src?: string
}

export const Loader = styled(MutatingDots).attrs(props => (
  {
    width: '100px',
    height: '100px',
    wrapperStyle: {
      marginLeft: '50%',
      marginTop: '50%',
      transform: 'translate(-25%, -50%)'
    },
  }
))`
  display: block;
  margin: 100px;
  padding: 10px;
`;

export const CardBase = styled.div`
  width: 400px;
  min-height: 400px;
  background: #fff;
  border-radius: ${props => props.theme.box.borderRadius};
  filter: ${props => props.theme.box.boxShadow};
  position: relative;
`;

export const DishImage = styled.img`
  border-top-left-radius: ${props => props.theme.box.borderRadius};
  border-top-right-radius: ${props => props.theme.box.borderRadius};
  height: 230px;
  width: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  height: 100%;
  padding: 15px 40px 50px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeading = styled.div`
  font-family: 'Gaegu', sans-serif;
  font-weight: bold;
  font-size: 30px;
  line-height: 0.9;
  max-width: 250px;
`;

export const IconButton = styled.button<IconButtonProps>`
  background: url(${props => props.src}) center no-repeat;
  width: 50px;
  height: 50px;
`;

export const CardDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 25px;
  line-height: 1.32;
`;

export const NextButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 33px;
  border: ${props => props.theme.color.primary} 1px solid;
  border-radius: ${props => props.theme.box.borderRadius};
  background: rgba(153, 52, 169, 0.42);
  font-size: 18px;
  font-weight: bold;
  filter: ${props => props.theme.box.boxShadow};
`;