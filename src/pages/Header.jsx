import {
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Search } from "./Search";
import { useSelector } from "react-redux";
import { Wishlist } from "../wishlist/WishList";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { data } = useSelector((state) => state.movie);
  let navigate = useNavigate();

  return (
    <>
      <header className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              className="text-2xl sm:text-3xl font-bold text-white"
              to="/home"
            >
              MovieZone
            </Link>

            <div className="flex items-center gap-4 sm:gap-6">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white cursor-pointer text-lg"
                onClick={() => setShowSearch((prev) => !prev)}
              />
              <FontAwesomeIcon
                icon={faUser}
                className="text-white cursor-pointer text-lg"
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white cursor-pointer text-lg"
                onClick={()=> navigate("/wishlist")}
              />
            </div>
          </div>
        </div>
      </header>

      {showSearch && (
        <div className="w-full flex justify-center px-4 bg-gray-800">
          <div className="w-full max-w-xl bg-gray-200 shadow-xl rounded-3xl p-6 sm:p-8 flex flex-col items-center transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Search for a Movie
            </h2>
            <Search onSearchSubmit={() => setShowSearch(false)}/>
          </div>
        </div>
      )}
    </>
  );
};
