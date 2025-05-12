import React from 'react'
import { useAppSelector } from './redux/hooks'

export default function Mycomp() {

    const count = useAppSelector((s) => s.counter)
  return (
    <div>
        <h1>My comp: {count}</h1>
    </div>
  )
}
