import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../data/MovieAPISlice";

export const Search = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.trim()) return;

    dispatch(fetchMovie(movie));
    setMovie("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md border rounded">
      <input
        type="text"
        placeholder="Search your movie..."
        className="w-full px-4 py-2 rounded-md outline-none text-black"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
      />
    </form>
  );
};
