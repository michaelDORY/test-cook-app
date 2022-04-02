import styled from "styled-components";
import {MutatingDots} from "react-loader-spinner";

interface WithQueries {
  isTablet?: boolean
}

interface IconButtonProps extends WithQueries{
  src: string
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

export const CardBase = styled.div<WithQueries>`
  width: ${props => props.isTablet ? '300px' : '400px'};
  min-height: ${props => props.isTablet ? '400px' : '500px'};;
  background: #fff;
  border-radius: ${props => props.theme.box.borderRadius};
  filter: ${props => props.theme.box.boxShadow};
  position: relative;
`;

export const DishImage = styled.img<WithQueries>`
  border-top-left-radius: ${props => props.theme.box.borderRadius};
  border-top-right-radius: ${props => props.theme.box.borderRadius};
  height: ${props => props.isTablet ? '130px' : '230px'};
  width: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div<WithQueries>`
  height: 100%;
  padding: ${props => props.isTablet ? '15px 20px 20px' : '15px 5% 20px'};
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeading = styled.div<WithQueries>`
  display: inline;
  font-family: 'Gaegu', sans-serif;
  font-weight: bold;
  font-size: ${props => props.isTablet ? '22px' : '30px'};
  line-height: 0.9;
  max-width: 70%;
`;

export const IconButton = styled.button<IconButtonProps>`
  background: url(${props => props.src}) center / cover no-repeat;
  width: ${props => props.isTablet ? '40px' : '50px'};
  height: ${props => props.isTablet ? '40px' : '50px'};
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