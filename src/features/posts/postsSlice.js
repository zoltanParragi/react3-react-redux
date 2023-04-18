import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('getposts', async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()

})

const initialState = {
    posts: [],
    status: null
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {

    },
    extraReducers:
        (build) => {
            build.addCase(getPosts.pending, (state) => {
                state.status = "loading"
            });
            build.addCase(getPosts.fulfilled, (state, action) => {
                state.status = "success"
                state.posts = action.payload
            });
            build.addCase(getPosts.rejected, (state) => {
                state.status = "failed"
            });

        }

})

export default postsSlice.reducer;