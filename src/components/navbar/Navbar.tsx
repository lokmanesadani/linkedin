import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Home from "../icons/home";
import Network from "../icons/Network";
import Jobs from "../icons/Jobs";
import Messages from "../icons/Messages";
import Notification from "../icons/Notification";
import "./navbar.css";
import Search from "../icons/Search";
import Linkedin from "../icons/Linkedin";
import { useEffect, useRef, useState } from "react";
import Work from "../icons/Work";
import { useDispatch, useSelector } from "react-redux";
import { setNavState } from "../../redux/sideenav/sidenavSlice";
import SmallNav from "components/smallNav/smallNav";
const items: NavbarItem[] = [
  {
    title: "Home",
    link: "/home",
    icon: Home,
    active: true,
    notifications: 3,
  },
  {
    title: "My network",
    link: "/mynetwork",
    icon: Network,
    active: true,
  },
  {
    title: "Jobs",
    link: "/jobs",
    icon: Jobs,
    active: true,
  },
  {
    title: "Messaging",
    link: "/messaging",
    icon: Messages,
    active: true,
  },
  {
    title: "Notifications",
    link: "/notifications",
    icon: Notification,
    active: true,
  },
];
interface NavbarItem {
  title: string;
  link: string;
  icon: any;
  active: boolean;
  notifications?: number;
}
const Navbar = () => {
  const [link, setLink] = useState(window.location.pathname);
  const [searching, setSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const inputRef = useRef<HTMLInputElement>(null);
  const [smallNavState, setSmallNavState] = useState(false);
  const search = (
    <input
      className="search-input"
      placeholder="Search by title, skill or company"
      type="text"
    />
  );

  const popSearch = () => {
    setSearch(true);
    console.log("here");

    setTimeout(() => {
      if (inputRef.current != null) {
        inputRef.current.focus();
      }
    }, 0);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  // top nav second part

  const open = (
    <div className="navbar-item text-xl cursor-pointer">
      <div
        className="w-full h-full grid place-content-center"
        onClick={() => {
          setSmallNavState(!smallNavState);
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div
        className={`small-nav transition-all ${
          smallNavState ? " visible opacity-100" : " invisible opacity-0"
        }`}
      >
        {items.slice(3, items.length).map((item) => {
          return (
            <Link
              onClick={() => setLink(item.link)}
              className={`navbar-item  ${
                link === item.link ? `navbar-item-active` : ""
              } `}
              to={item.link}
              key={item.link}
            >
              <item.icon height="1.5em" />
              <span className="text-xs hidden md:block">{item.title}</span>
            </Link>
          );
        })}
        <SmallNav />
      </div>
    </div>
  );

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="mr-2 overflow-hidden rounded-lg shrink-0 text-blue-700">
          <Linkedin height="2.4em" />
        </div>
        <div className="search">
          {search}
          <div className="search-icon">
            <Search height="1em" />
          </div>
        </div>
        <div className="nav-global">
          <div
            className={`w-full h-full py-2 md:hidden bg-white ${
              searching ? "absolute" : "hidden"
            } pr-4`}
          >
            <div className="relative ">
              <input
                ref={inputRef}
                onBlur={() => setSearch(false)}
                className="h-10 bg-slate-200 pl-10 px-2 text-sm w-full text-ellipsis rounded-md"
                placeholder="Search by title, skill or company"
                type="text"
              />
              <div className="search-icon">
                <Search height="1em" />
              </div>
            </div>
          </div>
          <div className="navbar-item md:hidden" onClick={popSearch}>
            <Search
              className="text-slate-600 stroke-slate-500"
              height="1.5em"
            />
          </div>
          {items.slice(0, windowWidth < 450 ? 3 : items.length).map((item) => {
            return (
              <Link
                onClick={() => setLink(item.link)}
                className={`navbar-item relative  ${
                  link === item.link ? "navbar-item-active" : ""
                }`}
                to={item.link}
                key={item.link}
              >
                <div className="relative">
                  {item.notifications && (
                    <div className="top-0 right-0 translate-x-1 -translate-y-1 absolute h-[14px] aspect-square border-4 border-red-600 bg-white rounded-full" />
                  )}
                  <item.icon height="1.5em"></item.icon>
                </div>
                <span className="text-xs hidden md:block">{item.title}</span>
              </Link>
            );
          })}
          {windowWidth < 450 ? open : <SmallNav />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
