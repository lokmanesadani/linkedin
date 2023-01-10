import "./sidenav.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { setNavState } from "../../redux/sideenav/sidenavSlice";
const SideNav = () => {
  const navState = useSelector((state: RootState) => state.sidenav.collapsed);
  const dispatch = useDispatch();
  return (
    <div className={`sidenav-global ${navState ? "" : "translate-x-full"}`}>
      <div className="sidenav-title">
        <span>Work</span>
        <div
          onClick={() => {
            dispatch(setNavState());
          }}
          className="absolute right-5 top-1/2 bg-slate-200 hover:bg-slate-300 rounded-full h-6 aspect-square -translate-y-1/2 grid place-content-center"
        >
          <FontAwesomeIcon className="h-4 w-4 text-slate-700" icon={faXmark} />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
