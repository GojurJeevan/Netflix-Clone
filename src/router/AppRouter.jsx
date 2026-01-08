import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dispaly } from "../display/Display";
import { Movie } from "../data/Movie";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dispaly />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
};
