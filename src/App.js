import './App.css';
import { ContextApi } from './StoreNew/ContextApi';
import TempForm from './WeatherApp/TempForm';

function App() {
  return (
    <div>
      <ContextApi>
        <TempForm/>
    </ContextApi>
    </div>
  );
}

export default App