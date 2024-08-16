import React, { FC } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

export interface ThreadPointsBarProps {
  points: number;
  responsePoints?: number;
}

const ThreadPointsBar: FC<ThreadPointsBarProps> = ({
  points,
  responsePoints,
}) => {
  const { width } = useWindowDimensions();
  if (width > 760) {
    return (
      <div className="threadcard-points">
        <div className="threadcard-points-item">
          {points || 0}
          <br />
          <FontAwesomeIcon icon={faHeart} className="points-icon" />
        </div>
        <div className="threadcard-points-item">
          {responsePoints}
          <br />
          <FontAwesomeIcon icon={faShare} className="points-icon" />
        </div>
      </div>
    );
  }
  return null;
};

export default ThreadPointsBar;
