import React, { FC, useState } from "react";
import DropDown, { Option } from "react-dropdown";
import "react-dropdown/style.css";

interface ThreadCategoryProps {
  categoryName?: string;
}

const catOptions: Array<string | Option> = [
  { value: "1", label: "programming" },
  { value: "2", label: "cooking" },
];

const defaultOption = catOptions[0];
const ThreadCategory: FC<ThreadCategoryProps> = ({ categoryName }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionChange = () => {
    console.log("option changed");
  };
  return (
    <div className="thread-category-container">
      <strong>{categoryName} </strong>
      <DropDown
        className="thread-category-dropdown"
        options={catOptions}
        value={selectedOption}
        onChange={handleOptionChange}
        placeholder="Select Category"
      />
    </div>
  );
};

export default ThreadCategory;
