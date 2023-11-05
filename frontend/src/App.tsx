import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3500/forage');
      const apiData = await response.json()
      setData(apiData);
    }
    getData()
  }, []);
  console.log(data)
  return (
    <h1>Stardew Forage Catalogue</h1>
  )
}

export default App
