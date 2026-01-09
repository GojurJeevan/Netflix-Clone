import { Routes, Route } from "react-router-dom";
import { Movie } from "../data/Movie";
import { Dispaly } from "../display/Display";
import { Header } from "../pages/Header";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dispaly />} />
      <Route path="/home" element={<Header />} />
      <Route path="/:movieName" element={<Movie />} />
    </Routes>
  );
};
