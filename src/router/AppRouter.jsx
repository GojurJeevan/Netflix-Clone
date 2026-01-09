import { Routes, Route } from "react-router-dom";
import { Movie } from "../data/Movie";
import { Dispaly } from "../display/Display";
import { Home } from "../pages/Home";
import { Wishlist } from "../wishlist/WishList";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dispaly />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:movieName" element={<Movie />} />
      <Route path="/wishlist" element={<Wishlist/>} />
    </Routes>
  );
};
