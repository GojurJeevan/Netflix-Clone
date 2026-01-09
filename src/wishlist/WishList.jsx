import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { WISHLIST } from "./WishListSlice";

export const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 text-xl bg-black">
        ❤️ Your wishlist is empty
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
                alt={movie.Title}
                className="w-full h-80 object-cover"
              />
            </Link>

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold truncate">{movie.Title}</h2>

              <p className="text-sm text-gray-400">{movie.Year}</p>

              <button
                onClick={() => dispatch(WISHLIST(movie))}
                className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
              >
                <FontAwesomeIcon icon={solidHeart} />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
