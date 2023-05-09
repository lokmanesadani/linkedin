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
import AddPost from "pages/Home/components/AddPost/AddPost";
import SortType from "pages/Home/components/SortType/SortType";
import PostComponent from "pages/Home/components/Post/Post";

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
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, inventore fuga distinctio officia iusto voluptate, aut quidem atque architecto magni culpa ea ullam quas voluptas molestiae saepe. Atque, molestias nihil.",
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
    <div className="w-full h-[2000px] pt-6">
      <div className="layout">
        <div className="sidebar  h-fit bg-white">lokmane</div>
        <div className="flex flex-col main">
          <AddPost />
          <SortType
            {...{ sortType, setSortType, sortPanelOpen, setSortPanelOpen }}
          />
          <div className="flex flex-col gap-3">
            {posts.map((post: Post, index) => {
              console.log(post);

              return <PostComponent key={index} {...post} />;
            })}
          </div>
        </div>
        <div className="aside"></div>
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
