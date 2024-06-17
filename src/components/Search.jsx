import { useState } from "react";

export const Search = ({ onAddCategory }) => {

  const [searchCategory, setSearchCategory] = useState('');

  const handleOnChange = ({target}) => {
    setSearchCategory(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(searchCategory.trim().length <= 1) return;
    onAddCategory(searchCategory);
    setSearchCategory('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchCategory}
        onChange={handleOnChange}
      />
    </form>
  )
}
