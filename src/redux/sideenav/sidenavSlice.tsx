import { createSlice } from "@reduxjs/toolkit";
const sidenavSlice = createSlice({
  name: "sidenav",
  initialState: {
    collapsed: false,
  },
  reducers: {
    setNavState: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});
export const { setNavState } = sidenavSlice.actions;
export default sidenavSlice.reducer;
