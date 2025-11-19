import { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router';

import map from '../assets/map.png';

export default function About() {
  const [mapError, setMapError] = useState(false);
  return (
    <>
      <Header />
      <div className='flex flex-col pt-36 px-2 sm:px-5 md:px-10 w-full min-h-screen bg-[#e9edf4] overflow-y-auto'>
        <div className='w-full bg-white rounded-xl shadow-md overflow-hidden p-8'>
          <h1 className='text-2xl font-bold mb-6'>
            <span>About</span>{' '}
            <span className='text-[#2b638b] font-bold'>Us</span>
          </h1>
          <p className='mb-2 text-sm'>
            Aksara Dental is committed to providing comprehensive dental care
            with a focus on patient comfort and satisfaction. Our team of
            experienced dental professionals utilizes the latest technology and
            techniques to ensure the best possible outcomes for our patients.
          </p>
          <p className='mb-2 text-sm'>
            We offer a wide range of services including general dentistry,
            cosmetic dentistry, orthodontics, and more. Our state-of-the-art
            facility is designed to create a welcoming and relaxing environment
            for all our patients.
          </p>
          <p className='mb-2 text-sm'>
            At Aksara Dental, we believe in educating our patients about their
            oral health and empowering them to make informed decisions about
            their dental care. We look forward to helping you achieve a healthy
            and beautiful smile!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-4 mt-4 mb-4'>
          <div className='bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4'>
            <h1 className='text-xl font-bold'>Contact</h1>
            <p className='text-sm flex flex-col space-y-1'>
              <span className='font-bold'>Address:</span>
              <span>Klinik Pergigian Aksara (Batang Kali),</span>
              <span>No 1, Tingkat Atas Jalan Mahagoni 7/1A,</span>
              <span>Batang Kali, Pekan Batang Kali,</span>
              <span>44300 Batang Kali, Selangor, Malaysia</span>
            </p>
            <p className='text-sm flex flex-col space-y-1'>
              <span className='font-bold'>No Tel:</span>
              <span>+601167319191</span>
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-0 overflow-hidden'>
            <Link
              to='https://www.google.com/maps/place/KLINIK+PERGIGIAN+AKSARA+BATANG+KALI/@3.46163,101.65796,15z/data=!4m6!3m5!1s0x31cc6d21d738cdf1:0x11dfa4baefa35497!8m2!3d3.4617797!4d101.6578312!16s%2Fg%2F11l2vx5r6_?hl=en&entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              rel='noreferrer'
              title='Sila klik untuk lebih lanjut'
            >
              <img
                src={map}
                alt='Map to Aksara Dental Clinic'
                className='w-full h-full object-cover rounded-lg'
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
