import {  useMemo, useCallback, useState, useRef } from 'react'

  export const Login = () => {

  const imputPasswordRef = useRef<HTMLInputElement>(null)

  const [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')

  const emailLenght = useMemo(() => {
    return email.length * 1000
  }, [email.length])

  const handleEntrar = useCallback(() => {
    console.log(email)
    console.log(password)
  },[email, password]);
return (
  <div >
  <form>
    <p>Quantidades de caracters no email : {emailLenght}</p>

    <label>
      <span>Email</span>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyDown = {e => e.key === 'enter'? imputPasswordRef.current?.focus(): undefined}
       /> 
  
      <span>password</span>
      <input
        type="password"
        value={password}
        ref={imputPasswordRef}
        onChange={e => setPassword(e.target.value)}
      /> 
    </label>

         <button type="button" onClick={handleEntrar}>
      to enter 
        </button>
     </form>
  </div> 
)
}
