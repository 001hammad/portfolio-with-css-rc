import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png';
const Header = () => {
  return (
    <header>
        <div id="nav-container">
        <div>
          <Image src={Logo} alt='logo' className='logo'/>
        </div>

        <div id="navbar-menu">
          <Link href="/"><p className='nav-menu'>Home</p></Link>
          <Link href="/About"><p className='nav-menu'>About</p></Link>
          <Link href="/Contact"><p className='nav-menu'>Contact</p></Link>
        </div>
      </div>
    </header>
  )
}

export default Header
