import React, { FC } from "react";
import { getTimePastIfLessThanDay } from "../../common/date";

interface UsernameAndTimeProps {
  userName?: string;
  lastModifiedOn?: Date;
}

const UsernameAndTime: FC<UsernameAndTimeProps> = ({
  userName,
  lastModifiedOn,
}) => {
  return (
    <span>
      <strong>{userName} </strong>
      <label style={{ marginLeft: "0.5em" }}>
        {lastModifiedOn ? getTimePastIfLessThanDay(lastModifiedOn) : ""}
      </label>
    </span>
  );
};

export default UsernameAndTime;
