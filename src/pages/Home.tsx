import {
  faArrowDown,
  faCalendar,
  faCaretDown,
  faCirclePlay,
  faImage,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Home.scss";

interface Comment {
  content: string;
  user: string;
  date: string;
}
interface Like {
  user: string;
  date: string;
  type: string;
}
interface Post {
  title: string;
  content: string;
  image?: string;
  user: {
    username: string;
    avatar: string;
    description?: string;
    connection: string;
  };
  date_hour: string;
  tags: string[];
  source?: { user: string; action: string; avatar: string };
  comments: Comment[];
  likes: Like[];
}
const posts: Post[] = [
  {
    title: "Post 1",
    content: "This is the content of post 1",
    user: {
      username: "lokmane",
      avatar: "https://picsum.photos/300/300",
      description: "MERN Stack Developer",
      connection: "3rd+",
    },
    date_hour: "2021-01-01 12:00",
    image: "https://picsum.photos/300/300",
    tags: ["tag1", "tag2", "tag3"],
    source: {
      user: "user1",
      action: "commented on",
      avatar: "https://picsum.photos/300/300",
    },
    comments: [
      {
        content: "This is a comment",
        user: "user2",
        date: "2021-01-01",
      },
    ],
    likes: [{ user: "user2", date: "2021-01-01", type: "like" }],
  },
  {
    title: "Post 1",
    content: "This is the content of post 1",
    user: {
      username: "lokmane",
      avatar: "https://picsum.photos/300/300",
      description: "MERN Stack Developer",
      connection: "3rd+",
    },
    date_hour: "2021-01-01 12:00",

    tags: ["tag1", "tag2", "tag3"],
    comments: [
      {
        content: "This is a comment",
        user: "user2",
        date: "2021-01-01",
      },
    ],
    likes: [{ user: "user2", date: "2021-01-01", type: "like" }],
  },
];

const Home = () => {
  const [sortType, setSortType] = useState<"Top" | "Recent">("Top");
  const [sortPanelOpen, setSortPanelOpen] = useState(false);
  return (
    <div className="w-full h-[2000px] flex justify-center pt-6">
      <div className="flex-row flex max-w-4xl gap-7 w-full">
        <div className="w-1/2 max-w-md h-fit bg-white">lokmane</div>
        <div className="flex flex-col w-full">
          <div className="card ">
            <div className="px-3 pt-3 flex flex-row grow w-full gap-3">
              <img
                className="h-12 w-12 rounded-full"
                src="https://picsum.photos/200/300"
                alt=""
              />
              <div className="flex-1 rounded-full border text-left text-sm text-zinc-600 border-zinc-400 py-3 px-4">
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
          <div
            className="flex flex-row h-10 items-center gap-2 relative cursor-pointer"
            onClick={() => setSortPanelOpen(!sortPanelOpen)}
          >
            <div className="h-[1px] flex-1  border-b border-zinc-400"></div>
            <div className="text-xs">
              <span className="text-zinc-500">Sort by : </span>
              <span className="font-medium text-zinc-700">
                {sortType}{" "}
                <FontAwesomeIcon className="pl-1" icon={faCaretDown} />
              </span>
            </div>
            <div>
              <div
                className={`sort-panel ${
                  sortPanelOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <span
                  onClick={() => setSortType("Top")}
                  className={`sort-type ${
                    sortType === "Top" ? "after:visible" : " after:invisible"
                  }`}
                >
                  Top
                </span>
                <span
                  onClick={() => setSortType("Recent")}
                  className={`sort-type ${
                    sortType === "Recent" ? "after:visible" : " after:invisible"
                  }`}
                >
                  Recent
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {posts.map((post) => {
              return (
                <div className="card">
                  {post.source && (
                    <>
                      <div className="px-4 py-2 flex flex-row items-center text-xs text-zinc-500">
                        <img
                          className="h-7 w-7 rounded-full mr-2"
                          src={post.source.avatar}
                          alt=""
                        />
                        <span className="text-xs font-bold text-zinc-500">
                          {post.source.user}
                        </span>
                        &nbsp;
                        {post.source.action} this
                      </div>
                      <div className="h-[1px] bg-zinc-300 mx-4"></div>
                    </>
                  )}
                  <div className="px-4 py-2 flex flex-row items-center">
                    <img
                      className="h-12 w-12 rounded-full mr-2"
                      src={post.user.avatar}
                      alt=""
                    />
                    <div className="flex flex-col text-left">
                      <div className=" font-semibold flex flex-row items-center gap-1">
                        {post.user.username}{" "}
                        <div className=" aspect-square h-[3px] bg-zinc-500 rounded-full">
                          {" "}
                        </div>{" "}
                        <span className=" font-light text-zinc-500">
                          {post.user.connection}
                        </span>
                      </div>
                      <div className=" text-xs">{post.user.description}</div>
                      <div></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" w-1/2"></div>
      </div>
    </div>
  );
};

export default Home;

// function that get the diffrence between 2 dats in hours

const getHourDiffrence = (date: string) => {
  const now = new Date();
  const postDate = new Date(date);
};
