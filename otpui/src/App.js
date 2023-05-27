
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import OTPForm from './components/OTPForm';
import Welcome from './components/Welcome';
function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' exact element={ <Form/> } />
      <Route path='/otp' exact element={ <OTPForm/> } />
      <Route path='/welcome' exact element={ <Welcome/> } />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
