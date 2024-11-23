import {useReducer} from "react";

export const CounterReducer = () => {
    
    const initialState = { 
        name: 'diego',
        level: 1,
        health: 100,
    };


    const reducer = (state,action) =>{

        switch(action.type){
            case 'increment-level':
                return {...state, level: (state.level + 1) };
            case 'decrement-level':
                return {...state, level: (state.level - 1) };
            case 'reduce-health':
                return {...state, health: 0 };
            default:
               return state 
            
        }
        
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <h1>Counter Reducer</h1>
            
            <h2>Name Player {state.name}</h2>
            <p>Level: {state.level}</p>
            <p>health: {state.health}</p>
            <br/>
            <button onClick={()=> dispatch({type: 'increment-level'}) }> Increment level</button>
            <button onClick={()=> dispatch({type: 'decrement-level'}) }> Decrement Level</button>
            <button onClick={()=> dispatch({type: 'reduce-health'}) }>  Die </button>
        </div>
    )
}
