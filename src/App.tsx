import {AppWrapper} from "App.styled";
import {Routes, Route} from "react-router-dom";
import Header from 'components/Header/Header';
import RandomDishContainer from "components/RandomDishContainer/RandomDishContainer";
import {FavouritesContainer} from "components/FavouritesContainer/FavouritesContainer";

function App() {
  return (
    <AppWrapper>
      <Header/>
      <Routes>
        <Route path={'/'} element={<RandomDishContainer/>} />
        <Route path={'favourites'} element={<FavouritesContainer/>} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
