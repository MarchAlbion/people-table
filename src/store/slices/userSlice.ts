import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../types/initialState";
import { getAllUsers } from "../../utils/userThunk";

const initialState: InitialState = {
  users: [],
  status: "idle",
  error: null,
  filter: "name",
  search: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = "success";
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.status = "error";
      state.error =
        action.error.message || "Oops! Cant fetch users plesae try again";
    });
  },
});

export default usersSlice.reducer;
export const { setFilter, setSearch } = usersSlice.actions;
