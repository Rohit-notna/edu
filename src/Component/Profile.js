import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Profile() {
  return (
    <div className='w-12/12 mx-auto '>
      <div className='lg:w-3/12 md:w-3/12 w-10/12 mx-auto  border mt-10 bg-slate-50'>
       <h1 className=' py-4 bg-white px-6'>Account Settings </h1>
       <div className='flex justify-start px-6 mt-6'>
        <div className='w-2/12'>

        <Stack direction="row" spacing={2}>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
        </div>
        <div className=''>
            <h1 className='text-xl font-extrabold '>Marry Doe</h1>
            <p className='text-md'>Marry@Gmail.com</p>

                    </div>
                   
       </div>
       <div className='mt-4 px-6'>
                        <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit Impedit architecto corrupti corporis est nesciunt ullam, sequi provident .</p>
                    </div>
                    <div className='pb-80 pt-10 border border-t-dotted mt-4'></div>
                    <div className='py-6 border border-t-dotted'></div>
      </div>
    </div>
  )
}
