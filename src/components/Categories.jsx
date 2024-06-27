import { GiftGrid } from "./GiftGrid"

export const Categories = ({
  categories
}) => {
  return (
    <>
      {
        categories.map((category)=>(
          <GiftGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
};
