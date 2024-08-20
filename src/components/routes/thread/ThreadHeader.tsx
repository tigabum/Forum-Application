import React, { FC } from "react";
import UsernameAndTime from "./UsernameAndTime";

interface ThreadHeaderProps {
  userName?: string;
  lastModifiedOn?: Date;
  title?: string;
}
const ThreadHeader: FC<ThreadHeaderProps> = ({
  title,
  userName,
  lastModifiedOn,
}) => {
  return (
    <div className="thread-header-container">
      <h3> {title}</h3>
      <UsernameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
    </div>
  );
};

export default ThreadHeader;
