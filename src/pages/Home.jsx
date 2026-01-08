import {
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export const Home = () => {
  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link className="text-2xl sm:text-3xl font-bold text-white" to={"/home"}>
            Netflix
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white cursor-pointer text-lg"
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
  );
};
