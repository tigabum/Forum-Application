import React, { FC } from 'react';
import Thread from '../../../models/Thread';

export interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard: FC<ThreadCardProps> = ({ thread }) => {
  return <div>{thread?.userName} </div>;
};

export default ThreadCard;
