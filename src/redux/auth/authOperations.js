import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk(
  'auth/signup',
  async ({ email, password, displayName, photoURL }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName, photoURL });
      const { uid } = auth.currentUser;
      return { userId: uid, name: displayName, email, photoURL };
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // const user = await signInWithEmailAndPassword(auth, email, password);
      const user = {
        auth: true,
        email,
        password,
      };
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const signout = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const refresh = createAsyncThunk(
  'auth/update',
  async (_, { rejectWithValue }) => {
    try {
      return await new Promise((resolve, reject) =>
        // onAuthStateChanged(auth, user => {
        //   if (user) {
        //     const { uid, displayName, email, photoURL } = user;
        //     resolve({ userId: uid, name: displayName, email, photoURL });
        //   } else {
        //     return rejectWithValue('Unable to fetch user');
        //   }
        // }),
        {
          resolve({
            userId: 12,
            name: 'Natalii',
            email: 'example@mail.com',
            photoURL: '1231',
          });
        },
      );
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);
