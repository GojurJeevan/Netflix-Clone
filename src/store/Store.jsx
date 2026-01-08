import { configureStore } from "@reduxjs/toolkit";
import movieName from '../data/MovieAPISlice'

export default configureStore({
    reducer:{
        movie: movieName
    }
}) 