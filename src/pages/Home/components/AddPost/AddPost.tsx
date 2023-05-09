import {
  faImage,
  faCirclePlay,
  faCalendar,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddPost.scss";
import Dialog from "pages/Home/components/Dialog/Dialog";
import { useState } from "react";

const AddPost = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="card ">
        <div className="px-3 pt-3 flex flex-row grow w-full gap-3">
          <img
            className="h-12 w-12 rounded-full"
            src="https://picsum.photos/200/300"
            alt=""
          />
          <div
            onClick={() => setShow(true)}
            className=" cursor-pointer flex-1 rounded-full border text-left text-sm text-zinc-600 border-zinc-400 py-3 px-4"
          >
            Start a post
          </div>
        </div>
        <div>
          <div className="flex flex-row grow gap-1 justify-between text-zinc-500 text-sm font-normal px-2 py-2">
            <div className="new-post-item">
              <FontAwesomeIcon
                className=" text-xl text-blue-500"
                icon={faImage}
              />
              <span>Photo</span>
            </div>
            <div className="new-post-item">
              <FontAwesomeIcon
                className=" text-xl text-green-600"
                icon={faCirclePlay}
              />
              <span>Video</span>
            </div>
            <div className="new-post-item">
              <FontAwesomeIcon
                className=" text-xl text-yellow-600"
                icon={faCalendar}
              />
              <span>Event</span>
            </div>
            <div className="new-post-item">
              <FontAwesomeIcon
                className=" text-xl text-orange-700"
                icon={faNewspaper}
              />
              <span>Write article</span>
            </div>
          </div>
        </div>
      </div>
      <Dialog {...{ show, setShow }} />
    </>
  );
};

export default AddPost;
