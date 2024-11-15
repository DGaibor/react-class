import logo from './logo.svg';
import './App.css';

function App() {
    
  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    age: 40
  }
  
  const getUser = (userInput) => {
      return <div> Hola {userInput.firstName} </div>
  }
  
  
  const numberRangeChecker = (num) => {
      if (num < 50){
            return <span>Menor a 50</span>
      }
      if (num >= 50 && num <= 100){
            return <span>50 - 100</span>
      }
        if (num > 100) {
            return <span>Mayor a 100</span>
        }
  }
    
  return (
      <>
          <div> 200 = {numberRangeChecker(200)}</div>
          
          <div> 40 = {numberRangeChecker(40)}</div>
          
          
          <div> 70 = {numberRangeChecker(70)}</div>
          
          
      </>
  );
}

export default App;
