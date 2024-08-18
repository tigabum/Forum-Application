import React, { useEffect, useState } from "react";

import { groupBy } from "lodash";

import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { getTopCategories } from "../../../services/DataService";
import TopCategories from "./TopCategories";

function RightMenu() {
  const [categories, setCategories] = useState<JSX.Element>();
  const { width } = useWindowDimensions();

  useEffect(() => {
    getTopCategories().then((res) => {
      const topCategoriesGrouped = groupBy(res, "category");
      console.log("topCategoriesGrouped is found", topCategoriesGrouped);
      let groupedOnlyValues: any = [];
      for (let key in topCategoriesGrouped) {
        let topCategory = topCategoriesGrouped[key];

        groupedOnlyValues.push(<TopCategories topcategory={topCategory} />);
      }

      setCategories(groupedOnlyValues);

      console.log("groupedOnlyValues", groupedOnlyValues);
    });
  }, []);

  if (width <= 760) {
    return null;
  }
  return <div className="rightmenu">{categories} </div>;
}

export default RightMenu;
