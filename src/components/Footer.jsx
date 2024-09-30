import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-black p-20 text-white flex justify-between'> 
          <p>&copy; Copyright 2024. </p>
          <Link href='https://github.com/Debbie-alt/MelodyWave.git'>Become a developer or contributor</Link>

        
    </footer>
  )
}

export default Footer