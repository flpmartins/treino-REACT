import { Link } from 'react-router-dom'

import { useRef } from 'react'

export const Dashboard = () => {

  const counterRef = useRef({couter:0})

  return (

 <div>
  <p>dashboard</p>

  <p>{counterRef.current.couter}</p>

  <button onClick={() => counterRef.current.couter++}>somar</button>
  <button onClick={() => console.log(counterRef.current.couter)}>log</button>

    <Link to="/pagina-login">Login</Link>
   
 </div>
)
}