import React, { useEffect, useState } from 'react';
import MainHeader from './MainHeader';
import Category from '../../../models/Category';
import { useParams } from 'react-router-dom';
import { getThreadsByCategory } from '../../../services/DataService';
import ThreadCard from './ThreadCard';
import Thread from '../../../models/Thread';

type params = {
  categoryId: string;
};

const Main = () => {
  const [category, setCategory] = useState<Category | undefined>();
  const [threadsItem, setThreadsItem] = useState<Array<JSX.Element>>();
  const { categoryId } = useParams<params>();
  useEffect(() => {
    console.log('category id is', categoryId);
    if (categoryId) {
      getThreadsByCategory(categoryId).then((threads) => {
        const threaditem = threads.map((th) => {
          return <ThreadCard key={th.id} thread={th} />;
        });
        if (!category) {
          setCategory(threads[0].category);
        }
        setThreadsItem(threaditem);
      });
    }
  }, [categoryId]);
  return (
    <div className="content">
      <MainHeader category={category} />
      <div>{threadsItem} </div>
    </div>
  );
};

export default Main;
