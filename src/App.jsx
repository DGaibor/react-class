import './App.css';
import {Ticket} from './components/ticket/Ticket'
import {Loading} from "./components/loading/Loading";
import {WeatherDisplay} from "./components/weatherDisplay/WeatherDisplay";
import {User} from "./components/user/User";
import {Welcome} from "./components/welcome/Welcome";
import {Counter} from "./components/counter/Counter";
import {CounterTitle} from "./components/counterTitle/CounterTitle";
import UserContext  from "./context/UserContext";
import {ConsumerComponent} from "./components/consumer/Consumer";
import {useState} from "react";
import {UserDisplay} from "./components/userDisplay/UserDisplay";
import {EditUser} from "./components/editUser/EditUser";
import {CounterReducer} from "./components/counterReducer/CounterReducer";
import {InputRef} from "./components/inputRef/InputRef";


function App() {
    
    const [user, setUser] = useState( {
          name: 'John Doe',
          email: 'johndoe@example.com',
          age: 25
        });
    const [link, setLink] = useState('home')
    
  return (
<>
    {/*<UserContext.Provider value={{user,setUser}}>*/}
    {/*    <UserDisplay/>*/}
    {/*    <EditUser/>*/}
    {/*</UserContext.Provider>*/}
    {/*<CounterReducer/>*/}
    {/*<InputRef/>*/}
    {/*<Loading/>*/}
    {
        link ==='home' && <h1>Home</h1>
    }
    {
        link ==='shop' && <h1>Shop</h1>
    }
    
    <button onClick={()=>setLink('shop')}> Ir a shop</button>
</>
  );
}

export default App;
