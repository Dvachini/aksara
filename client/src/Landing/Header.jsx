import { CiLocationOn } from 'react-icons/ci';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from 'react-router';

import { FaWaze, FaMapMarkedAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full py-2 z-10 bg-[#e9edf4]'>
      <div className='flex justify-between px-4 md:px-20 pt-4'>
        <Link to='/' className='text-gray-700 hover:text-gray-900 '>
          <img
            src='/logoaksara.svg'
            alt='Aksara Logo'
            className=' w-24 h-24 rounded-full bg-white'
          />
        </Link>
        <div className='flex items-center space-x-10 text-base'>
          <Link to='/' className='text-gray-700 hover:text-gray-900 '>
            Home
          </Link>
          <Link to='/about' className='text-gray-700 hover:text-gray-900 '>
            About
          </Link>
          <Popover>
            <PopoverButton className='bg-[#2b638b] text-white px-2 md:px-4 py-2 rounded-lg hover:bg-[#2b638b]/50 flex items-center gap-2 justify-center focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white cursor-pointer'>
              <CiLocationOn className='text-xl' />
              <span className='hidden md:flex'>Find Us</span>
            </PopoverButton>
            <PopoverPanel
              transition
              anchor='bottom'
              className=' space-y-1 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(2)] data-closed:-translate-y-1 data-closed:opacity-0 cursor-pointer p-3 z-11 shadow-lg'
            >
              <Link
                className='flex gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-700/5'
                to='https://waze.com/ul/hw2879q0yr'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaWaze className='text-xl' />
                <p className='font-semibold text-gray-700'>Waze</p>
              </Link>
              <Link
                className='flex gap-2 rounded-lg px-3 py-2 transition hover:bg-gray-700/5'
                to='https://maps.app.goo.gl/TmqM4f9314v7Ea4v8'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaMapMarkedAlt className='text-xl' />
                <p className='font-semibold text-gray-700 whitespace-nowrap'>
                  Google Maps
                </p>
              </Link>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </header>
  );
}
