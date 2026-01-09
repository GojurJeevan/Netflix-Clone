import { createSlice } from "@reduxjs/toolkit";

let listData = [];

try {
  const storedData = localStorage.getItem("dataList");
  listData = storedData ? JSON.parse(storedData) : [];
  if (!Array.isArray(listData)) listData = [];
} catch {
  listData = [];
}

const WishListSlice = createSlice({
  name: "wishlist",
  initialState: listData,

  reducers: {
    WISHLIST: (state, action) => {
      const movie = action.payload;

      const index = state.findIndex(
        (item) => item.imdbID === movie.imdbID
      );

      if (index === -1) {
        state.push(movie);
      } else {
        state.splice(index, 1);
      }

      localStorage.setItem("dataList", JSON.stringify(state));
    },
  },
});

export const { WISHLIST } = WishListSlice.actions;
export default WishListSlice.reducer;
