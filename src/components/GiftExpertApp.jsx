import { useState } from "react";
import { Search } from "./Search";
import { GiftGrid } from "./GiftGrid";
import { Categories } from "./Categories";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (nameCategory) => {
    if( categories.includes(nameCategory) ) return;
    setCategories([
      nameCategory,
      ...categories
    ]);
  }

  return (
    <div>
      <h1>
        Gift Expert App
      </h1>

      <Search onAddCategory={onAddCategory}/>

      <Categories categories={categories} />

    </div>
  )

}
