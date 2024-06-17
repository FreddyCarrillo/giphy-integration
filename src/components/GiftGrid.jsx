import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GiftGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifts(category);

  return (
    <div>

      <h2>{ category }</h2>

      {
        isLoading && (<div>Cargando....</div>)
      }

      {
        images.map((image)=>(
          <GiftItem 
            key={image.id}
            gift={image}
          />
        ))
      }
      
    </div>
  )
};
