import axios from "axios";
import { useMapGift } from "./useMapGift";

export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=kyhPYTiwhQpImN42N6NFDW9rKJRSsbDD&q=${category}&limit=4`
  const { data } = await axios.get(url);
  const customGifts = useMapGift(data.data);
  return customGifts;
}
