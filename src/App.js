import {
    useState,
    useRef
  } from "react"; 
  import "./App.css";
  import image from "./components/bg1.jpg";
  
  function App() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 

    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
    }; 
   
    function minus(e) { 
        e.preventDefault(); 
      setResult((result) => result - Number(inputRef.current.value)); 
    };
   
    function times(e) { 
        e.preventDefault(); 
        setResult((result) => result * Number(inputRef.current.value)); 
    }; 
   
    function divide(e) { 
        e.preventDefault(); 
        setResult((result) => result / Number(inputRef.current.value)); 
    };
   
    function resetInput(e) { 
        e.preventDefault();
        inputRef.current.value = 0
    }; 
   
    function resetResult(e) { 
        e.preventDefault();
        setResult((preventVal) => preventVal * 0);
    }; 
   
    return ( 
      <div className="App" style={{backgroundImage: `url(${image})`, 
      backgroundSize: 'cover', 
      width: '100vw',
      height: '100vh',
      backgroundPosition: 'center'}}>
        <div> 
          <h1>Simple Calculator</h1> 
          <h6>by Rovieart</h6>
        </div> 
        <form> 
          <h2 ref={resultRef}>{result}</h2> 
          <div className="textInputContainer">
            <input 
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
          </div>
          <button onClick={plus}>+</button> 
          <button onClick={minus}>-</button>  
          <button onClick={times}>×</button>  
          <button onClick={divide}>÷</button> 
          <br></br>
          <button onClick={resetInput}>Reset Input</button> 
          <button onClick={resetResult}>Reset Result</button> 
        </form> 
      </div> 
    ); 
  } 
   
  export default App; 
  