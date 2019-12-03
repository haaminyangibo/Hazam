
import { useState, useEffect} from 'react';


export default function UseKeyPress(targetKey) {

  const [keyPressed, setKeyPressed] = useState(false);
  
 const  downHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  const upHandler = ({ key} ) => {
    
    if (key === targetKey) {
      // setKeyPressed(true) 
      setTimeout(() => setKeyPressed(false), 1000)
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler );
    window.addEventListener('keyup', upHandler );
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); 

  return keyPressed;
}

