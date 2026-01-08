import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../data/MovieAPISlice";
import { useNavigate } from "react-router-dom";

export const Search = ({ onSearchSubmit }) => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.trim()) return;

    dispatch(fetchMovie(movie));

    navigate(`/${movie}`);

    setMovie("");

    if (onSearchSubmit) onSearchSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-gray-900 transition-transform hover:scale-105"
    >
      <input
        type="text"
        placeholder="Search your movie..."
        className="flex-1 px-6 py-4 text-gray-900 text-lg placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600 rounded-l-full"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />

      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 font-semibold rounded-r-full transition-all duration-300 flex items-center justify-center"
      >
        🔍
      </button>
    </form>
  );
};
