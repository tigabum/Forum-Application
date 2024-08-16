import React, { FC } from 'react';
import Category from '../../../models/Category';

export interface mainHeaderProps {
  category?: Category;
}

const MainHeader: FC<mainHeaderProps> = ({ category }) => {
  return (
    <div className="main-header">
      <div className="title-bar">
        <strong>{category?.name || 'Category section'} </strong>
      </div>
    </div>
  );
};
export default MainHeader;
