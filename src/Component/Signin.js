import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='w-12/12 mx-auto'>
      <div className='lg:w-3/12 md:w-3/12 w-10/12 mx-auto  md:pb-96 pb-36 px-6 border mt-10'>
        <h1 className='pt-8 mb-3 md:text-3xl text-xl font-extrabold'>Sign in to your <br/>PopX account</h1>
        <Box component="form" noValidate autoComplete="off">
          <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            InputLabelProps={{ shrink: true, style: { fontSize: '14px', textAlign: 'center', color: '#6c25ff' } }}  
            InputProps={{ style: { height: '32px' } }} 
            placeholder="Enter email address"
          />
          <TextField 
            id="password" 
            label="Password" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            type="password" 
            placeholder="Enter password"
            InputLabelProps={{ shrink: true, style: { fontSize: '14px', textAlign: 'center', color: '#6c25ff' } }} 
            InputProps={{ style: { height: '32px' } }} 
          />
        </Box>
        <Link to="/Profile" >       <button className='w-full mt-2 text-white bg-gray-400 rounded-sm py-2 mb-8'>Login</button></Link>
      </div>
    </div>
  );
}
