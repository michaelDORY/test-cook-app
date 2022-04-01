import axios from "axios";
import {IResponseDish, IGetRandomDish} from 'types/types';

export async function getRandomDish(): Promise<IResponseDish> {
  const response = await axios.get<IGetRandomDish>('https://www.themealdb.com/api/json/v1/1/random.php');
  return response.data.meals[0];
}