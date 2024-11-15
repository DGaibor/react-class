import './App.css';
import {Ticket} from './components/ticket/Ticket'


function App() {
   
    
  return (
      <div>
   
          <Ticket nickName={'Dgaibor'} fullName={'Diego Gaibor'} destination={'New York'} gender={'Mr'} seat={'14A'} />
          <Ticket nickName={'Mruiz'} fullName={'Maria Ruiz'} destination={' Alaska'} gender={'Ms'} seat={'16A'} />
         
      </div>

  );
}

export default App;
