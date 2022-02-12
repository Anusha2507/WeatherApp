import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ContextApi } from './StoreNew/ContextApi';
import TempForm from './WeatherApp/TempForm';
import CounterFunction from './CounterApp/CounterFunction';
import CounterClass from './CounterApp/CounterClass';
import RockPaperScissors from './RockPaperScissors/RockPaperScissors';

function App() {
  return (
    <div>
      <ContextApi>
        <BrowserRouter>
          <Routes>
              <Route exact path="/weather" element={<TempForm/>}/>
              <Route exact path="/counterclass" element={<CounterClass/>}/>
              <Route exact path="/counterfunction" element={<CounterFunction/>}/>
              <Route exact path="/rps" element={<RockPaperScissors/>}/>
          </Routes>
        </BrowserRouter>
        
    </ContextApi>
    </div>
  );
}

export default App