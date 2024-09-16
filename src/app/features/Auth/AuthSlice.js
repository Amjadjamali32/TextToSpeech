import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

// BACKEND API URL 
const API_URL = 'http://localhost:5000/api/v1/users';

import axios from 'axios';

// Async thunk for signup
export const signup = createAsyncThunk('auth/signup', async (formData, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/api/v1/users/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Return the user data or any relevant data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); // Handle error
    }
});

// Thunk for user login
export const login = createAsyncThunk('/login', async (userData, { rejectWithValue }) => {
    try {
        console.log('User data:', userData);  // Debugging
        const response = await axios.post(`${API_URL}/login`, userData);
        console.log('Response:', response.data);  // Debugging
        return response.data;  // Make sure the backend sends { user, token }
    } catch (error) {
        console.error('Login Error:', error.response.data);  // Debugging
        return rejectWithValue(error.response.data);
    }
});


// Async thunks for Google and GitHub login
export const googleLogin = createAsyncThunk('auth/googleLogin', async (googleUserData) => {
    const token = googleUserData.tokenId;
    const user = googleUserData.profileObj;
    // Perform any backend auth logic if necessary
    return { user, token };  // This is passed to fulfilled case
});

export const githubLogin = createAsyncThunk('auth/githubLogin', async (githubUserData) => {
    const token = githubUserData.accessToken;
    const user = githubUserData.profile;
    return { user, token };
});

// Initial State
const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
    // Login with email/password
    builder
    .addCase(login.pending, (state) => {
        console.log("Login pending");
        state.loading = true;
        state.error = null;
    })
    .addCase(login.fulfilled, (state, action) => {
        console.log("Login successful", action.payload);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
    })
    .addCase(login.rejected, (state, action) => {
        console.error("Login failed", action.payload);
        state.loading = false;
        state.error = action.payload;
    })

    // Signup with email/password
    .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
    })
    .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })

    .addCase(googleLogin.pending, (state)=> {
        state.loading = true
        state.error = null
    })
    .addCase(googleLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
    })
    .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Google login failed';
    })

    // GitHub login
    .addCase(githubLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(githubLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
    })
    .addCase(githubLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = 'GitHub login failed';
    });
    },

})

export const { logout } = authSlice.actions;
export default authSlice.reducer;