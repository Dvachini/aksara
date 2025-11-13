import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router';

import Header from './Header';
import topek from '../assets/topek.png';
import braces from '../assets/braces.png';
import cavity from '../assets/cavity.png';
import whitening from '../assets/whitening.png';
import checkup from '../assets/checkup.png';

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className='flex flex-col px-2 sm:px-5 md:px-10 items-start pt-36 w-full min-h-screen bg-[#e9edf4] overflow-y-auto'>
        <div className='w-full  bg-white rounded-xl shadow-md overflow-hidden'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='py-4 md:py-8 pl-5 md:pl-10'>
              <p className='text-gray-600 text-lg sm:text-2xl md:text-4xl'>
                Comprehensive Dental Care
              </p>
              <p className='text-[#2b638b] font-bold text-2xl sm:text-4xl md:text-6xl'>
                @Aksara Dental
              </p>
              <p className='text-xs md:text-sm text-gray-800 mt-3'>
                Dr Muhammad Taufiq bin Wildani
              </p>
              <p className='text-xs md:text-sm text-gray-500'>
                BDMS Tanta, Egypt
              </p>
              <div className='mt-6 flex space-x-4'>
                <Link
                  to='https://wa.me/message/6MZ7FI7JSPGDH1'
                  rel='noopener noreferrer'
                  className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2'
                >
                  <FaWhatsapp className='text-xl' />
                  <span>Chat with Us</span>
                </Link>
              </div>
            </div>
            <div className=''>
              <img
                className=' w-full object-cover h-full md:w-48'
                src={topek}
                alt='Dr Taufiq'
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full gap-4 mt-8 mb-8'>
          <div className='bg-white rounded-lg shadow-md p-6 flex items-center'>
            <span>
              <img src={braces} alt='Braces' className='w-12 h-12 mr-2' />
            </span>
            <span>Braces</span>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 flex items-center'>
            <span>
              <img
                src={whitening}
                alt='Teeth Whitening'
                className='w-8 h-8 mr-2'
              />
            </span>
            <span>Teeth Whitening</span>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 flex items-center'>
            <span>
              <img
                src={checkup}
                alt='Dental Check-up'
                className='w-8 h-8 mr-2'
              />
            </span>
            <span>Dental Check-up</span>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 flex items-center'>
            <span>
              <img src={cavity} alt='Filling' className='w-7 h-7 mr-2' />
            </span>
            <span>Filling</span>
          </div>
        </div>
      </div>
    </>
  );
}
