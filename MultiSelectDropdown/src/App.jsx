import React, { useState } from 'react'

const itemsList = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "PHP",
  "Swift"
];
export default function App() {
  

  const [searchTerm, setSearchTerm] = useState("")

  // Filtered List based on input
  const filteredItems = itemsList.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ padding: "20px" }}>
      <h2>MultiSelect Dropdown</h2>
      <div style={{ border: "1px solid gray", padding: "10px", width: "300px" }}>
        <input 
          type="text" 
          placeholder='Search here...' 
          style={{ width: "95%", padding: "5px" }} 
          onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>

      {/* DropDown List */}
      <div style={{ marginTop: "10px" }}>
        {
          filteredItems.map((item, index) => (
            <div key={index} style={{
              padding: "5px",
              cursor: "pointer",
              borderBottom: "1px solid #ccc"
            }}>
              {item}
            </div>
          ))
        }

        {/* filter Items ke liye */}
        {
          filteredItems.length === 0 && (
            <div>No Match Found</div>
          )
        }

      </div>
    </div>
  )
}
