import React, { useEffect, useState } from "react";
import Nav from "../../areas/Nav";
import ThreadHeader from "./ThreadHeader";
import { useParams } from "react-router-dom";
import { getThreadById } from "../../../services/DataService";
import ThreadModel from "../../../models/Thread";
import ThreadCategory from "./ThreadCategory";
import ThreadTitle from "./ThreadTitle";
import "./Thread.css";

type params = {
  id: string;
};

const Thread = () => {
  const [thread, setThread] = useState<ThreadModel>();
  const { id } = useParams<params>();
  useEffect(() => {
    console.log("id is", id);
    if (id) {
      getThreadById(id).then((res) => {
        console.log("promise returned", res);
        setThread(res);
      });
    }
    console.log("Single thread is", thread);
  }, [id]);
  return (
    <div className="screen-root-container">
      <div className="thread-nav-container">
        <Nav />
      </div>
      <div className="thread-content-container">
        <div>
          <ThreadHeader
            userName={thread?.userName}
            lastModifiedOn={thread ? thread?.lastModifiedOn : new Date()}
            title={thread?.title}
          />
          <ThreadCategory categoryName={thread?.category?.name} />
          <ThreadTitle title={thread?.title} />
        </div>
      </div>
    </div>
  );
};

export default Thread;
