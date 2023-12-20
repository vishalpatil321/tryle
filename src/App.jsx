import Btns from './components/btns';
import styles from './App.module.css';
import Display from './components/display';
import { useState } from "react";

function App() {
  

  let [calval,setcalval] = useState("");
  const onButtonclick=(buttonText) => {
    if(buttonText === 'c'){
      setcalval("");

    }else if(buttonText === '='){
const result = eval(calval);
setcalval(result);
    }
    else{
      const newDisplayvalue = calval + buttonText;
      setcalval(newDisplayvalue);
    }

    
  }
               
  return (
    
   <div className={styles.calculator}>
     <Display displayvalue = {calval}></Display>
      <Btns onButtonclick={onButtonclick}></Btns>
  </div>
  
  )
}

export default App
