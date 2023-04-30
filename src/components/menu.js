import React from 'react'
import Link from 'next/link'


  export const Menu=() =>{
    return (
          <ul className='menu text-white text-bg-dark'>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/login">loginpage</Link>
      </li>
    </ul>
    )
    

 }