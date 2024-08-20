import React, { FC } from "react";

interface ThreadTitleProps {
  title?: string;
}

const ThreadTitle: FC<ThreadTitleProps> = ({ title }) => {
  const handleInputChange = (
    e: React.InputHTMLAttributes<HTMLInputElement>,
  ) => {};
  return (
    <div className="thread-title-container">
      <strong>Title </strong>
      <div className="field">
        <input
          type="text"
          value={title || ""}
          onChange={handleInputChange}
          placeholder="title"
        />
      </div>
    </div>
  );
};

export default ThreadTitle;
