'use client'
import {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={ () => setCount(count+1) }>add num</button>
      <p>{count}</p>
      <button onClick={ () => setCount(count-1) }>del num</button>
    </div>
  )
}
export default Counter