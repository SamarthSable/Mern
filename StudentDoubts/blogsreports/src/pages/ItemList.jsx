import React, { useState } from "react";

const items = [
  {
    name: "Item 1",
    description: "This is the description for Item 1",
  },
  {
    name: "Item 2",
    description: "This is the description for Item 2",
  },
  {
    name: "Item 3",
    description: "This is the description for Item 3",
  },
  {
    name: "Item 4",
    description: "This is the description for Item 4",
  },
];

export default function ItemList() {
  const [visibleItem, setVisibleItem] = useState(null);

  const toggleDescription = (index) => {
    if (visibleItem === index) {
      setVisibleItem(null);
    } else {
      setVisibleItem(index);
    }
  };

  return (
    <div>
      <h2>Items List</h2>

      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>

          <button onClick={() => toggleDescription(index)}>
            {visibleItem === index ? "Hide Details" : "Show Details"}
          </button>

          {visibleItem === index && <p>{item.description}</p>}
        </div>
      ))}
    </div>
  );
}
