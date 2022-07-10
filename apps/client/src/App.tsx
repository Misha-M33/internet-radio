import { useEffect, useState } from "react"
import { LoginPage } from "./pages/LoginPage/LoginPage"

function App() {
  // const [message, setMessage] = useState('')

  // useEffect(() => {
  //   getData()
  // }, [])
  
  // const getData = async () => {
  //   const result = await fetch('http://localhost:3000')
  //   const data = await result.json()
  //   setMessage(data?.message)
  // }
  return (
    <div>
      <LoginPage/>
      {/* <h1>Hello</h1>
      <h2>{message}</h2> */}
    </div>
  )
}

export default App
