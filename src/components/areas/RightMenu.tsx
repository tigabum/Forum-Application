import React from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

function RightMenu() {
  const { width } = useWindowDimensions();

  if (width <= 760) {
    return null;
  }
  return <div className="rightmenu">RightMenu</div>;
}

export default RightMenu;
