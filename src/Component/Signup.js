import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='w-12/12 mx-auto'>
      <div className='lg:w-3/12 md:w-3/12 w-10/12 mx-auto px-6 border mt-10'>
        <h1 className='pt-8 mb-3 md:text-3xl text-xl font-extrabold'>Create your <br/>PopX account</h1>
        <Box component="form" noValidate autoComplete="off">
          <TextField 
            id="fullname" 
            label="Full Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            InputLabelProps={{ shrink: true, style: { fontSize: '14px', textAlign: 'center', color: '#6c25ff' } }}  
            InputProps={{ style: { height: '32px' } }} 
            placeholder="Enter your full name"
          />
          <TextField 
            id="phonenumber" 
            label="Phone Number" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            InputLabelProps={{ shrink: true, style: { fontSize: '14px', textAlign: 'center', color: '#6c25ff' } }}  
            InputProps={{ style: { height: '32px' } }} 
            placeholder="Enter your phone number"
          />
          <TextField 
            id="email" 
            label="Email Address" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            InputLabelProps={{ shrink: true, style: { fontSize: '14px', textAlign: 'center', color: '#6c25ff' } }}  
            InputProps={{ style: { height: '32px' } }} 
            placeholder="Enter your email address"
          />
          <TextField 
            id="password" 
            label="Password" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            type="password" 
            InputLabelProps={{ shrink: true, style: { fontSize: '14px', textAlign: 'center', color: '#6c25ff' } }} 
            InputProps={{ style: { height: '32px' } }} 
            placeholder="Enter your password"
          />
          <TextField 
            id="maidenname" 
            label="Maiden Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            InputLabelProps={{ shrink: true, style: { fontSize: '14px', textAlign: 'center', color: '#6c25ff' } }}  
            InputProps={{ style: { height: '32px' } }} 
            placeholder="Enter your maiden name"
          />
        </Box>
        <div>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" className='text-md mt-2'>Are you an Agency?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      
      </RadioGroup>
    </FormControl>
        </div>
        <Link to="/Profile" >   <button className='w-full mt-32 text-white bg-customPurple rounded-sm py-2 mb-7'>Create Account</button></Link>
      </div>
    </div>
  );
}
