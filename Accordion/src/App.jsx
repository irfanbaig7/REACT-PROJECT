import React, { useState } from 'react'

export default function App() {

  const [faqs] = useState(
    [
      {
        id: 1,
        question: "What is React?",
        answer: "React is a JS library for building user interfaces."
      },
      {
        id: 2,
        question: "What is useState?",
        answer: "useState is a React Hook used to manage state in functional components."
      },
      {
        id: 3,
        question: "What is JSX?",
        answer: "JSX is a syntax extension that looks similar to XML or HTML."
      }
    ]
  )


  const [activeId, setActiveId] = useState(null)

  const toggleFAQ = (id) => {
    if (activeId === id) {
      setActiveId(null)
    } else {
      setActiveId(id)
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>❓ Frequently Asked Questions</h1>
      {
        faqs.map((item) => (
          <div key={item.id} style={{ borderBottom: "1px solid gray", padding: "10px" }}>
            <div style={{ fontWeight: "bold", cursor: "pointer"}} onClick={() => toggleFAQ(item.id)}>{item.question}</div>
            {
              activeId === item.id && (
                <div style={{ marginTop: "5px", color: "#e7a7a7" }}>{item.answer}</div>
              )
            }
          </div>
        ))
      }
    </div>
  )
}
