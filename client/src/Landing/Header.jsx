import { CiLocationOn } from 'react-icons/ci';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from 'react-router';

import { FaWaze, FaMapMarkedAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full py-2 z-20 bg-brand-pale/95 backdrop-blur border-b border-brand/20'>
      <div className='flex justify-between items-center px-4 md:px-20 pt-2'>
        <Link to='/' className='flex items-center gap-3 group'>
          <img
            src='/logotaufiq.png'
            alt='Dr Taufiq Dental Clinic logo'
            className='w-14 h-14 md:w-16 md:h-16 shrink-0'
          />
          <span className='leading-tight'>
            <span className='block font-bold text-ink text-base md:text-lg group-hover:text-brand-deep'>
              Dr Taufiq
            </span>
            <span className='block text-brand-dark text-xs md:text-sm font-medium tracking-wide uppercase'>
              Dental Clinic · Est 2025
            </span>
          </span>
        </Link>
        <div className='flex items-center space-x-6 md:space-x-10 text-base'>
          <Link
            to='/'
            className='text-ink/80 hover:text-brand-deep hidden sm:block'
          >
            Home
          </Link>
          <Link to='/about' className='text-ink/80 hover:text-brand-deep'>
            About
          </Link>
          <Popover>
            <PopoverButton className='bg-brand text-white px-2 md:px-4 py-2 rounded-lg hover:bg-brand-dark flex items-center gap-2 justify-center focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white cursor-pointer'>
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
