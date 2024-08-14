// const INITIAL_VALUES = {
//   searchTerm: "",
// };

import { useState } from "react";
import toast from "react-hot-toast";

const SeachBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      console.log("Введіть текст для пошуку зображень");
      toast.error("Введіть текст для пошуку зображень");
    }
    onSubmit(searchTerm);
    setSearchTerm("");
  };
  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SeachBar;
