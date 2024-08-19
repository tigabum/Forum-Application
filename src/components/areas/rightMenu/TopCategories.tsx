import React, { FC, useEffect, useState } from "react";
import CategoryThread from "../../../models/CategoryThread";

import "./TopCategories.css";

interface topCategoryProps {
  topcategory: CategoryThread[];
}

const TopCategories: FC<topCategoryProps> = ({ topcategory }) => {
  const [threads, setThreads] = useState<JSX.Element | undefined>();
  useEffect(() => {
    if (topcategory && topcategory.length > 0) {
      const listofitem = topcategory.map((thr) => (
        <span className="clickable-span" key={thr.threadId}>
          {" "}
          <li>{thr.title} </li>
        </span>
      ));
      setThreads(<ul className="topcat-threads">{listofitem} </ul>);
    }
  }, [topcategory]);
  return (
    <div className="top-cat-container">
      <div>
        <span>
          <strong>{topcategory[0].category} </strong>
        </span>
      </div>
      {threads}
    </div>
  );
};

export default TopCategories;
