import { createSlice } from '@reduxjs/toolkit';
import {
  addComment,
  addPost,
  getAllPosts,
  getComments,
  getLikes,
  getPosts,
  toggleLike,
} from './postsOperations';

const handlePending = state => {
  state.isRefreshing = true;
  state.textError = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.textError = action.payload;
};

const state = {
  userPosts: [],
  allPosts: [],
  comments: [],
  likes: [],
  isRefreshing: false,
  textError: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState: state,
  extraReducers: builder => {
    builder
      .addCase(addPost.pending, state => handlePending(state))
      .addCase(addPost.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.userPosts.push(payload);
      })
      .addCase(addPost.rejected, (state, action) =>
        handleRejected(state, action),
      )
      .addCase(getAllPosts.pending, state => handlePending(state))
      .addCase(getAllPosts.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.allPosts = payload;
      })
      .addCase(getAllPosts.rejected, (state, action) =>
        handleRejected(state, action),
      )
      .addCase(getPosts.pending, state => handlePending(state))
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.userPosts = payload;
      })
      .addCase(getPosts.rejected, (state, action) =>
        handleRejected(state, action),
      )
      .addCase(addComment.pending, state => handlePending(state))
      .addCase(addComment.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.comments.push(payload);
      })
      .addCase(addComment.rejected, (state, action) =>
        handleRejected(state, action),
      )
      .addCase(getComments.pending, state => {
        state.textError = null;
      })
      .addCase(getComments.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.comments = payload;
      })
      .addCase(getComments.rejected, (state, action) =>
        handleRejected(state, action),
      )
      .addCase(toggleLike.pending, state => {
        state.textError = null;
      })
      .addCase(toggleLike.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        // state.likes.push(payload);
      })
      .addCase(toggleLike.rejected, (state, action) =>
        handleRejected(state, action),
      )
      .addCase(getLikes.pending, state => {
        state.textError = null;
      })
      .addCase(getLikes.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.likes.push(payload);
      })
      .addCase(getLikes.rejected, (state, action) =>
        handleRejected(state, action),
      )
      .addDefaultCase(state => state);
  },
});

export const postsReducer = postsSlice.reducer;
