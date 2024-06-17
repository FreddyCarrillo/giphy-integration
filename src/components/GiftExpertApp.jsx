import { useState } from "react";
import { Search } from "./Search";
import { GiftGrid } from "./GiftGrid";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    if( categories.includes(category) ) return;
    setCategories([
      category,
      ...categories
    ]);
  }

  return (
    <div>
      <h1>
        Gift Expert App
      </h1>

      <Search onAddCategory={onAddCategory}/>

      {
        categories.map((category)=>(
          <GiftGrid 
            key={category}
            category={category}
          />
        ))
      }

    </div>
  )

}
