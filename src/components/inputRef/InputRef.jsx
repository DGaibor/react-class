import {useRef} from "react";

export const InputRef = () => {
    
    const inputRef = useRef(null);
    
    const clear = ()=>{
        inputRef.current.value = ''
        inputRef.current.focus();
    }
    
  return (
      <>
          <input ref={inputRef} type={'text'} placeholder={'Name'}/>
          <button onClick={clear}>Submit</button>
      </>
  )
}
