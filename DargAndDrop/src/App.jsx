import React from 'react'
import DragAndDropp from './components/DragAndDropp'

export default function App() {
  const initialData = {
    Todo: [
      "design UI mockups",
      "Set up project repository",
      "Write Unit Test",
      "Integrate Payment Gateway",
    ],
    "In Progress": [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor elit.",
    ],
    Completed: [
      "Lorem ipsum dolor sit amet",
      " consectetur fine",
      "elit. Obcaecati tempore, unde"
    ]
  }
  return ( 
    <div>
      <DragAndDropp initialData={initialData} />
    </div>
  )
}


