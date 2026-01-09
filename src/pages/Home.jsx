import { useState } from "react";
import { Search } from "./Search";

export const Home = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <section className="relative min-h-[85vh] bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/movie-background-collage_23-2149876010.jpg')]">
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-16 max-w-5xl text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Discover Movies <br /> Worth Watching
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl">
            Search, explore, and get complete movie details instantly — ratings,
            cast, plot, and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowSearch(true)}
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              🔍 Search Movies
            </button>

            <button className="border border-gray-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all">
              🎬 Explore Popular
            </button>
          </div>
        </div>
      </section>

      {showSearch && (
        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <div className="w-full max-w-xl px-4">
            <Search onSearchSubmit={() => setShowSearch(false)} />
          </div>
        </div>
      )}
    </>
  );
};
