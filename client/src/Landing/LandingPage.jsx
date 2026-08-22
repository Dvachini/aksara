import { FaWhatsapp, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

import Header from './Header';
import Services from './Services';
import Reviews from './Reviews';
import topek from '../assets/topekO.png';

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className='flex flex-col px-2 sm:px-5 md:px-10 items-start pt-36 w-full min-h-screen bg-[#eef4f4] overflow-y-auto gap-6 pb-10'>
        {/* Hero */}
        <div className='w-full bg-white rounded-xl shadow-md overflow-hidden'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='py-6 md:py-10 pl-5 md:pl-10 flex-1'>
              <p className='text-brand-dark text-lg sm:text-2xl md:text-3xl font-medium'>
                Comprehensive Dental Care
              </p>
              <h1 className='text-brand-deep font-bold text-3xl sm:text-5xl md:text-6xl mt-1'>
                Dr Taufiq Dental Clinic
              </h1>
              <p className='text-xs md:text-sm text-ink mt-3 font-medium'>
                Dr Muhammad Taufiq bin Wildani
              </p>
              <p className='text-xs md:text-sm text-ink/50'>
                BDMS Tanta, Egypt
              </p>

              <div className='mt-4 inline-flex items-center gap-2 bg-brand-pale rounded-full px-3 py-1.5'>
                <span className='flex text-amber-400 gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className='text-sm' />
                  ))}
                </span>
                <span className='text-xs font-semibold text-ink'>
                  5.0 · 59 Google reviews
                </span>
              </div>

              <div className='mt-6 flex flex-wrap gap-3'>
                <Link
                  to='http://www.wasap.my/601167319191'
                  className='bg-[#25D366] hover:bg-[#1ebe5b] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-sm'
                >
                  <FaWhatsapp className='text-xl' />
                  <span>Chat with Us</span>
                </Link>
                <Link
                  to='#services'
                  className='bg-brand-pale hover:bg-brand/20 text-brand-deep px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium'
                >
                  View Treatments
                  <span aria-hidden>↓</span>
                </Link>
              </div>
            </div>
            <div className='md:w-64 lg:w-80 shrink-0'>
              <img
                className='w-full object-cover object-top md:h-full'
                src={topek}
                alt='Dr Taufiq at the clinic'
              />
            </div>
          </div>
        </div>

        <Services />
        <Reviews />

        <footer className='w-full text-center text-xs text-ink/50 py-4'>
          © {new Date().getFullYear()} Dr Taufiq Dental Clinic · Batang Kali,
          Selangor
        </footer>
      </div>
    </>
  );
}
