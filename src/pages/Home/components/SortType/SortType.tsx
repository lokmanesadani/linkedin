import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";

const SortType: FunctionComponent<{
  sortType: string;
  setSortType: any;
  sortPanelOpen: boolean;
  setSortPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ sortType, setSortType, sortPanelOpen, setSortPanelOpen }) => {
  return (
    <div
      className="flex flex-row h-10 items-center gap-2 relative cursor-pointer"
      onClick={() => setSortPanelOpen(!sortPanelOpen)}
    >
      <div className="h-[1px] flex-1  border-b border-zinc-400"></div>
      <div className="text-xs">
        <span className="text-zinc-500">Sort by : </span>
        <span className="font-medium text-zinc-700">
          {sortType} <FontAwesomeIcon className="pl-1" icon={faCaretDown} />
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
  );
};

export default SortType;
