const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// fulfilled pending rejected
const fetchUsers = createAsyncThunk("user/fetchusers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id)
    );
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchActions = fetchUsers;
