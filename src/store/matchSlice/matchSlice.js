import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const initialState = {
    matches: [],
    isMatchLoad: false,
    isMatchError: null,
    selectedStatus: null
}

export const fetchMatchData = createAsyncThunk("fetchMatchData", async () => {
    const res = await axiosInstance.get("/fronttemp")
    return res.data?.data?.matches
})

const matchSlice = createSlice({
    name: "matchSlice",
    initialState,
    reducers: {
        setSelectedStatus: (state, action) => {
            state.selectedStatus = action.payload
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchMatchData.pending, (state) => {
            state.isMatchLoad = true
        }).addCase(fetchMatchData.fulfilled, (state, action) => {
            state.isMatchLoad = false
            state.matches = action.payload
        }).addCase(fetchMatchData.rejected, (state, action) => {
            state.isMatchLoad = false
            state.isMatchError = action.error
            state.testError = true
        })
    }
})

export const {setSelectedStatus} = matchSlice.actions 

export default matchSlice.reducer