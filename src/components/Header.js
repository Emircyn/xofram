import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import logo from '../img/logo.png';
import searchIcon from '../img/search-icon.png';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <nav className='flex justify-between px-4 py-2 items-center '>
        <div>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className='lg:hidden'>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction='right'
            color='#fff'
            size={25}
          />
        </div>

        <div className='lg:flex gap-x-7 hidden'>
          <a href='/' className='text-[18px] text-white hover:text-primary'>
            LOGIN
          </a>
          <img src={searchIcon} className='cursor-pointer' alt='search' />
        </div>
      </nav>

      <div
        className={`flex justify-center lg:hidden ${
          isOpen ? 'h-80 opacity-100' : 'opacity-0 overflow-hidden h-0'
        }`}
      >
        <nav className='flex w-full  gap-y-5 text-lg p-4  flex-col items-center text-white'>
          <a
            className='hover:bg-linkHover w-full flex rounded h-10 items-center justify-center'
            href='/'
          >
            Home
          </a>
          <a
            className='hover:bg-linkHover w-full flex rounded h-10 items-center justify-center'
            href='/'
          >
            About
          </a>
          <a
            className='hover:bg-linkHover w-full flex rounded h-10 items-center justify-center'
            href='/'
          >
            Services
          </a>
          <a
            className='hover:bg-linkHover w-full flex rounded h-10 items-center justify-center'
            href='/'
          >
            Our Products
          </a>
          <a
            className='hover:bg-linkHover w-full flex rounded h-10 items-center justify-center'
            href='/'
          >
            Contact us
          </a>
        </nav>
      </div>
    </div>
  );
};
export default Header;
