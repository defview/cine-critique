import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="h-[34px] bg-gray-200 rounded-[20px] p-[2px]">
      <div className="flex items-center h-[30px] relative">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem font-chirp ${selectedTab === index ? "active font-chirp" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
