import { configureStore } from "@reduxjs/toolkit";
import movieName from '../data/MovieAPISlice';
import wishList from '../wishlist/WishListSlice'

export default configureStore({
    reducer:{
        movie: movieName,
        wishlist: wishList,
    }
}) 