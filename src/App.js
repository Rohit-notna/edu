import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import First from './Component/First';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Profile from './Component/Profile';

function App() {
  return (
 <div>
<BrowserRouter>
<Routes>
<Route path="/" element={<First/>}/>
<Route path="/Signup" element={<Signup/>}/>
<Route path="/Signin" element={<Signin/>}/>
<Route path="/Profile" element={<Profile/>}/>

</Routes>

</BrowserRouter>


 </div>
  );
}

export default App;









   {/* <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
      <Button variant="outlined">First</Button>
      <Button variant="outlined">Second</Button>
      <Button variant="outlined">Three</Button>
      <Button variant="outlined">Fourth</Button>
     
    </Stack> */}