import {
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router";
import { Search } from "./Search";
import { Movie } from "../data/Movie";
import { useSelector } from "react-redux";

export const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { data } = useSelector((state) => state.movie);

  return (
    <>

      <header className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              className="text-2xl sm:text-3xl font-bold text-white"
              to="/"
            >
              Netflix
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
              />
            </div>
          </div>
        </div>
      </header>

      {showSearch && (
        <div className="flex justify-center mt-6">
          <Search />
        </div>
      )}

      {data && <Movie />}
    </>
  );
};
