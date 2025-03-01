import { configureStore } from "@reduxjs/toolkit";
import matchSlice from "./matchSlice/matchSlice"

export const store = configureStore({
    reducer : {
        matches : matchSlice
    }
})