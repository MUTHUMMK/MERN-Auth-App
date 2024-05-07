import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='bg-slate-200' >
        <div className='flex justify-between max-w-6xl mx-auto items-center p-5' >
            
            <Link to='/'><h1 className='font-bold '>Auth App</h1></Link>
            
            <ul className='flex gap-6'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/About'>
                <li>About</li>
                </Link>
                <Link to='/SignIn'>
                <li>SignIn</li>
                </Link>
                <Link to='/SignUp'>
                <li>SignUp</li>
                </Link>
                <Link to='/Profile'>
                <li>Profile</li>
                </Link>

                
                
                
            </ul>
        </div>
    </div>
  )
}
