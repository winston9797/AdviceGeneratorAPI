import { useEffect, useState } from "react";
import axios from 'axios'
import DiceIcon from './images/icon-dice.svg'
import patternDevider from './images/pattern-divider-desktop.svg'

function App() {

  const [data,setData] = useState({})
  const [isLoading,setisLoading] = useState(true)
  const [randomNum,setRandomNum] = useState(Math.random() * 217)

  useEffect(()=>{
    const getData = async()=>{
      const res = await axios.get(`https://api.adviceslip.com/advice/${randomNum}`)
      .then(res=>{
        setData(res.data)
        console.log(res.data)
        setisLoading(false)
      })
    }
    getData()
  },[randomNum])


  function handleClick(){
    setRandomNum(Math.random() * 217)
  }

  if(!isLoading){
    return (
      <div className="App Card">
        <p className="textGreen">Advice : #{data.slip.id}</p>
        <h1>"{data.slip.advice}"</h1>
        <button className="primaryBtn" onClick={handleClick}><img src={DiceIcon} alt="" /></button>
        <img className="patterDiv" src={patternDevider} alt="" />
      </div>
    );
  }else{
    return (
      <>
        <h1>Loading ....</h1>
      </>
    );
  }
}

export default App;
