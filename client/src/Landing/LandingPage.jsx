import { FaWhatsapp } from 'react-icons/fa';

import Header from './Header';
import malay from '../assets/malay1.png';
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
          <div className='flex justify-between items-center'>
            <div className='py-4 md:py-8 pl-5 md:pl-10'>
              <p className='text-gray-600 text-lg sm:text-2xl md:text-4xl'>
                Comprehensive Dental Care
              </p>
              <p className='text-[#2b638b] font-bold text-2xl sm:text-4xl md:text-6xl'>
                @ Aksara Dental
              </p>
              <div className='mt-6 flex space-x-4'>
                <a
                  href='http://www.wasap.my/601167319191'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center space-x-2'
                >
                  <FaWhatsapp className='text-xl' />
                  <span>Chat with Us</span>
                </a>
              </div>
            </div>
            <div className=''>
              <img
                className='h-48 w-full object-cover md:h-full md:w-48'
                src={malay}
                alt='Aksara Dental'
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
