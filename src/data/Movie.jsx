import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import Error from "../loader/Error";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WISHLIST } from "../wishlist/WishListSlice";

export const Movie = () => {
  const { data, loading, error } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist || []);

  const isWishListed = !!data?.imdbID && wishlist.some((item) => item?.imdbID === data.imdbID);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-black text-4xl">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Error message={error} />
      </div>
    );
  if (!data || data.Response === "False")
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Error message={data?.Error || "Movie not found"} />
      </div>
    );

  return (
    <div className="min-h-screen text-white px-4 sm:px-8 py-10 bg-black">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-xl shadow-lg p-6 sm:p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex justify-center md:justify-start">
            <img
              src={data.Poster !== "N/A" ? data.Poster : "/no-poster.png"}
              alt={data.Title}
              className="w-64 sm:w-72 rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl font-bold">{data.Title}</h1>

              <button
                onClick={() => dispatch(WISHLIST(data))}
                className="text-2xl transition-transform hover:scale-110"
                title={
                  isWishListed ? "Remove from Wishlist" : "Add to Wishlist"
                }
              >
                <FontAwesomeIcon
                  icon={isWishListed ? solidHeart : regularHeart}
                  className={isWishListed ? "text-red-500" : "text-gray-400"}
                />
              </button>
            </div>

            <p className="text-gray-400">
              {data.Year} • {data.Rated} • {data.Runtime}
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Genre:</span>
              {data.Genre}
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Released:</span>
              {data.Released}
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Director:</span>
              {data.Director}
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Writer:</span>
              {data.Writer}
            </p>
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Actors:</span>
              {data.Actors}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Plot</h2>
          <p className="text-gray-300 leading-relaxed">{data.Plot}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Ratings</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
              ⭐ IMDb {data.imdbRating} / 10
            </span>
            <span className="bg-gray-700 px-4 py-1 rounded-full text-sm">
              Votes: {data.imdbVotes}
            </span>
            <span className="bg-green-600 px-4 py-1 rounded-full text-sm">
              Metascore: {data.Metascore}
            </span>
            {data.Ratings?.map((item, index) => (
              <span
                key={index}
                className="bg-blue-600 px-4 py-1 rounded-full text-sm"
              >
                {item.Source}: {item.Value}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300">
          <div>
            <span className="font-semibold text-white">Language:</span>
            {data.Language}
          </div>
          <div>
            <span className="font-semibold text-white">Country:</span>
            {data.Country}
          </div>
          <div>
            <span className="font-semibold text-white">Awards:</span>
            {data.Awards}
          </div>
          <div>
            <span className="font-semibold text-white">Box Office:</span>
            {data.BoxOffice || "N/A"}
          </div>
          <div>
            <span className="font-semibold text-white">Production:</span>
            {data.Production || "N/A"}
          </div>
          <div>
            <span className="font-semibold text-white">Type:</span>
            {data.Type?.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
