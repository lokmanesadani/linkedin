import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Work from "components/icons/Work";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setNavState } from "redux/sideenav/sidenavSlice";

const smallNav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="navbar-item border-r border-gray-300">
        <img
          src="https://picsum.photos/200/300"
          alt="profile"
          className="profile-pic rounded-full h-[24px] aspect-square bg-slate-600"
        />
        <div className="profiletext text-xs hidden md:block">
          <span>Me</span>
          <FontAwesomeIcon className="h-3 pl-1" icon={faCaretDown} />
        </div>
      </div>
      <div
        onClick={() => {
          dispatch(setNavState());
        }}
        className="navbar-item"
      >
        <div className="profile-pic">
          <Work height="1.5em" />
        </div>
        <div className="profiletext text-xs hidden md:block">
          <span>Work</span>
          <FontAwesomeIcon className="h-3 pl-1" icon={faCaretDown} />
        </div>
      </div>

      <Link
        to={"/premium"}
        className="navbar-item min-w-[4rem] premium underline mr-2 md:min-w-[5.5rem] text-[10px] md:text-[12px]"
      >
        Try Premium for <br /> free
      </Link>
    </>
  );
};

export default smallNav;
