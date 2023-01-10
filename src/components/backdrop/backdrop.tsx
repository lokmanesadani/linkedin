import "./backdrop.css";
import { useDispatch, useSelector } from "react-redux";
import { setNavState } from "../../redux/sideenav/sidenavSlice";
import { RootState } from "../../redux/store";
import { useState } from "react";

const Backdrop = () => {
  const dispatch = useDispatch();
  const navState = useSelector((state: RootState) => state.sidenav.collapsed);

  return (
    <div
      className={`${navState ? "backdrop" : "backdrop backdrop-closed"}`}
      onClick={() => {
        if (navState) {
          dispatch(setNavState());
        }
      }}
    ></div>
  );
};

export default Backdrop;
