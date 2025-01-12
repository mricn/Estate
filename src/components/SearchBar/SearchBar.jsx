import { useState } from "react";
import "./searchbar.scss";

const types = ["Buy", "Rent"];
export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minprice: 0,
    maxprice: 0,
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minprice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxprice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="../src/images/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}
