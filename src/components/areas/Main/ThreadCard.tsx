import React, { FC } from "react";
import Thread from "../../../models/Thread";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faReply } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import ThreadPointsInline from "../../points/ThreadPointsInline";
import ThreadPointsBar from "../../points/ThreadPointsBar";
import "./ThreadCard.css";

export interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard: FC<ThreadCardProps> = ({ thread }) => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  const showThread = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(`/thread/${thread.id}`);
    console.log("threadid", thread.id);
  };

  const getResponse = (thread: Thread) => {
    if (width < 760) {
      return (
        <label>
          {thread && thread.threadItems && thread.threadItems.length}
          <FontAwesomeIcon icon={faReply} />
        </label>
      );
    }
    return null;
  };
  console.log("category in threadcard", thread?.category.id);
  return (
    <section className="panel threadcard-container">
      <div className="threadcard-text-container">
        <div className="header-content">
          <Link to={`/categorythreads/${thread.category.id}`}>
            <strong>{thread?.category.name}</strong>
          </Link>
          <span className="username-header" style={{ marginLeft: "0.5em" }}>
            {thread.userName}
          </span>
        </div>

        <div className="question">
          <div
            className="title"
            style={{ marginBottom: "0.4em" }}
            onClick={showThread}
            data-thread-id={thread.id}
          >
            <strong> {thread.title}</strong>
          </div>
          <div
            className="threadcard-body"
            onClick={showThread}
            data-thread-id={thread.id}
          >
            <div>{thread.body}</div>
          </div>
        </div>
        <div className="threadcard-footer">
          <span>
            <label>
              {thread.views}
              <FontAwesomeIcon icon={faEye} style={{ marginLeft: "0.5em" }} />
            </label>
          </span>
          <span>
            {width < 760 ? (
              <ThreadPointsInline points={thread.points || 0} />
            ) : null}
            {getResponse(thread)}
          </span>
        </div>
      </div>

      <ThreadPointsBar
        points={thread.points}
        responsePoints={
          thread && thread.threadItems && thread.threadItems.length
        }
      />
    </section>
  );
};

export default ThreadCard;
