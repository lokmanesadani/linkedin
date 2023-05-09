import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendar,
  faCalendarDays,
  faCaretDown,
  faClose,
  faEllipsis,
  faImage,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
const items = [
  {
    title: "Photo",
    icon: faImage,
    color: "text-blue-200",
    dark: "text-blue-500",
    background: "bg-blue-500",
    lightBackground: "bg-blue-200",
  },
  {
    title: "Video",
    icon: faVideo,
    color: "text-purple-200",
    dark: "text-purple-500",
    background: "bg-purple-500",
    lightBackground: "bg-purple-200",
  },
  {
    title: "Event",
    icon: faCalendarDays,
    color: "text-blue-200",
    dark: "text-blue-500",
    background: "bg-blue-500",
    lightBackground: "bg-blue-200",
  },
  {
    title: "More",
    icon: faEllipsis,
    color: "text-gray-200",
    dark: "text-gray-500",
    background: "bg-gray-500",
    lightBackground: "bg-gray-200",
  },
];
const Dialog: FunctionComponent<{
  show: boolean;
  setShow: Function;
}> = ({ show, setShow }) => {
  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } absolute grid place-items-center top-0 left-0 w-screen h-screen z-50`}
    >
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50"
        onClick={() => setShow(false)}
      />
      <div className="flex flex-col items-start w-full  p-6 bg-white rounded-lg max-w-3xl  rlative z-[60]">
        <div className="flex w-full items-start gap-3 ml-2 text-zinc-600 mb-4">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="text-sm flex-1 flex flex-col  items-start">
            <div className="flex items-center gap-3 font-semibold text-xl">
              <div>Lokmane Abd...</div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            Post to anyone
          </div>
          <FontAwesomeIcon
            size="lg"
            className="cursor-pointer"
            icon={faClose}
            onClick={() => setShow(false)}
          />
        </div>
        <textarea
          placeholder="What do you want to talk about?"
          className="w-full resize-none h-64 placeholder:text-lg text-lg outline-none"
        />
        <div className="cursor-pointer  w-10 h-10 grid place-items-center rounded-full text-zinc-600 hover:bg-zinc-300">
          <FontAwesomeIcon size="lg" icon={faFaceSmile as IconProp} />
        </div>
        <div className="flex gap-3 mt-3">
          {items.map((item) => {
            return (
              <div
                className={`flex p-6 cursor-pointer hover:drop-shadow-lg shadow-black ${item.lightBackground} gap-3 flex-col h-36 items-center justify-center rounded-lg`}
              >
                <div
                  className={`h-14 aspect-square rounded-full grid place-items-center ${item.background}`}
                >
                  <FontAwesomeIcon icon={item.icon} className={item.color} />
                </div>
                <div
                  className={`text-sm font-semibold ${item.dark} brightness-70`}
                >
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
