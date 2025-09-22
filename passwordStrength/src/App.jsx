import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[password, setPassword] = useState("")
  const[strength,setStrength] = useState("")


  function strengthChecker(pwd){
    if(pwd.length<6) return "weak"
    let score = 0
    if(/[a-z]/.test(pwd)) score++
    if(/[A-Z]/.test(pwd)) score++
    if(/[0-9]/.test(pwd)) score++
    if(/[^A-Za-z0-9]/.test(pwd)) score++

    if(score === 2 ) return "weak"
    if(pwd.length >= 6 && score === 3  )  return "medium"
    if(pwd.length >= 8 && score === 4) return "Strong"
    if(pwd.length === 0) return "Enter a password"
  }


const handlePassword = (e)=> {
  setPassword(e.target.value)
  console.log(password);
  setStrength(strengthChecker(password))
  
  
}

  return (
    <>
     <h1>Password Strength</h1>
     <input type="password"
            value={password}
            placeholder='Enter password'
            onChange={handlePassword}
      />

      <p
          className={`mt-3 font-bold ${
            strength === "Weak"
              ? "text-red-500"
              : strength === "Medium"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          Strength: {strength}
        </p>
    </>
  )
}

export default App
