import { Routes, Route } from "react-router-dom";
import { Movie } from "../data/Movie";
import { Dispaly } from "../display/Display";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dispaly />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:movieName" element={<Movie />} />
    </Routes>
  );
};
