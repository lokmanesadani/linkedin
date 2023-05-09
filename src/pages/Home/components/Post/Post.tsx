import {
  faAdd,
  faHeart,
  faLightbulb,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

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
const getHoursAgo = (date: string) => {
  const now = new Date();
  const postDate = new Date(date);
  const diff = now.getTime() - postDate.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (minutes < 60) return `${minutes}min`;
  else if (hours < 24) return `${hours}h`;
  else if (days < 30) return `${days}d`;
  else if (months < 12) return `${months}m`;
  else return `${years}y`;
};
const Post: FunctionComponent<Post> = ({
  title,
  content,
  image,
  user,
  date_hour,
  tags,
  source,
  comments,
  likes,
}) => {
  return (
    <div className="card">
      {source && (
        <>
          <div className="px-4 py-2 flex flex-row items-center text-xs text-zinc-500">
            <img
              className="h-7 w-7 rounded-full mr-2"
              src={source.avatar}
              alt=""
            />
            <span className="text-xs font-bold text-zinc-500">
              {source.user}
            </span>
            &nbsp;
            {source.action} this
          </div>
          <div className="h-[1px] bg-zinc-300 mx-4"></div>
        </>
      )}
      <div className="px-4 py-2 flex flex-row items-center">
        <img className="h-12 w-12 rounded-full mr-2" src={user.avatar} alt="" />
        <div className="flex flex-1 flex-col text-left">
          <div className=" text-[14.5px] font-semibold flex flex-row items-center gap-1">
            {user.username}{" "}
            <div className=" aspect-square h-[3px] bg-zinc-500 rounded-full">
              {" "}
            </div>{" "}
            <span className=" font-light text-zinc-500">{user.connection}</span>
          </div>
          <div className="text-[11px] text-zinc-500">{user.description}</div>
          <div className="text-[11px] text-zinc-500">
            {getHoursAgo(date_hour)}
          </div>
        </div>
        <div className="flex items-center gap-[6px] font-medium text-sky-700">
          <FontAwesomeIcon icon={faAdd} /> Follow
        </div>
      </div>
      <p className="w-full flex flex-col items-start px-4 text-sm">{content}</p>
      <img src={image} className="w-full mt-4 max-h-[500px] object-cover" />
      <div className="px-4 py-2 flex flex-row items-center">
        <div className="h-4 w-4 rounded-full bg-sky-700 grid place-items-center relative z-0">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className="text-white relative z-10 text-[8px]"
          />
        </div>
        <div className="h-4 w-4 rounded-full -ml-1 bg-amber-500 grid place-items-center relative z-0">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-white relative z-10 text-[8px]"
          />
        </div>
        <div className="h-4 w-4 rounded-full -ml-1 bg-red-500 grid place-items-center relative z-0">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-white relative z-10 text-[8px]"
          />
        </div>
        <p className="text-xs">comments</p>
      </div>
    </div>
  );
};

export default Post;
