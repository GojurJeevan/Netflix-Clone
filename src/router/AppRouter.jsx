import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movie } from "../data/Movie";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieName" element={<Movie />} />
    </Routes>
  );
};
