import './App.css';
import {Ticket} from './components/ticket/Ticket'
import {Loading} from "./components/loading/Loading";
import {WeatherDisplay} from "./components/weatherDisplay/WeatherDisplay";
import {User} from "./components/user/User";
import {Welcome} from "./components/welcome/Welcome";
import {Counter} from "./components/counter/Counter";
import {CounterTitle} from "./components/counterTitle/CounterTitle";
import UserContext  from "./userContext";
import {ConsumerComponent} from "./components/consumer/Consumer";
import {useState} from "react";


function App() {

    const [userName, setUserName] = useState("Diego ");
    
  return (
      <div style={{ backgroundColor: 'yellow' }}>


          <UserContext.Provider value={userName}>
              <Loading/>
              <ConsumerComponent/>
          </UserContext.Provider>

          <button onClick={() => setUserName("Jose ")}>Change User</button>

      </div>

  );
}

export default App;
