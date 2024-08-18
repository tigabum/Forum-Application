import React, { FC, useEffect, useState } from "react";
import CategoryThread from "../../../models/CategoryThread";

interface topCategoryProps {
  topcategory: CategoryThread[];
}

const TopCategories: FC<topCategoryProps> = ({ topcategory }) => {
  const [threads, setThreads] = useState<JSX.Element>();
  useEffect(() => {
    const listofitem = topcategory.map((thr) => <li>{thr.title} </li>);
    setThreads(<ul>{listofitem} </ul>);
  }, [topcategory]);
  return (
    <React.Fragment>
      <span>
        <strong>{topcategory[0].category} </strong>
        {threads}
      </span>
    </React.Fragment>
  );
};

export default TopCategories;
