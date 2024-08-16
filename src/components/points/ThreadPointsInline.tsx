import React, { FC } from "react";

import { ThreadPointsBarProps } from "./ThreadPointsBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ThreadPointsInline: FC<ThreadPointsBarProps> = ({
  points,
  responsePoints,
}) => {
  return (
    <React.Fragment>
      <label>
        {points}
        <FontAwesomeIcon icon={faHeart} />
      </label>
    </React.Fragment>
  );
};

export default ThreadPointsInline;
