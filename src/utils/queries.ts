import {useMediaQuery} from "react-responsive";

export const useQuery = () => {
  const isMobile = useMediaQuery({query: '(max-width: 425px)'});
  const isTablet = useMediaQuery({query: '(max-width: 768px)'});

  return {isMobile, isTablet}
}
