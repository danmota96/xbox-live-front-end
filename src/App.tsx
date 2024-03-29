import { Toaster } from 'react-hot-toast';
import './App.css';
import Router from './router';

function App() {
  return (
    <div>
    <Toaster position="bottom-center" reverseOrder={false} />
    <Router/>
    </div>
   
  );
}

export default App;