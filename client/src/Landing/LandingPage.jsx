import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router';

import Header from './Header';
import topek from '../assets/topekO.png';
import braces from '../assets/braces.png';
import cavity from '../assets/cavity.png';
import tooth from '../assets/tooth.png';
import whitening from '../assets/whitening.png';
import checkup from '../assets/checkup.png';

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className='flex flex-col px-2 sm:px-5 md:px-10 items-start pt-36 w-full min-h-screen bg-[#e9edf4] overflow-y-auto'>
        <div className='w-full bg-white rounded-xl shadow-md overflow-hidden'>
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
            <div>
              <img
                className='w-full object-cover h-full md:w-48'
                src={topek}
                alt='Dr Taufiq'
              />
            </div>
          </div>
        </div>

        {(() => {
          const services = [
            'Dental Checkup',
            'Metal & Self Ligating Braces',
            'Professional Whitening',
            'Composite & Ceramic Veneer',
            'Crown & Bridge',
            'Composite Filling',
            'Scaling & Polishing',
            'Extraction',
            'Root Canal Treatment',
            'Minor Oral Surgery',
            'Acrylic & Flexible Denture',
            'Fiber Reinforced Composite',
            'Midline Diastema Closure',
            'Fluoride Varnish',
            'Fissure Sealant',
            'Essix & Hawley Retainer',
            'Gingivectomy',
          ];
          const pickImg = (name) => {
            if (name.includes('Brace')) return braces;
            if (/Scaling|Whitening|Polishing/i.test(name)) return whitening;
            if (name.includes('Checkup')) return checkup;
            if (
              /Filling|Veneer|Crown|Bridge|Root Canal|Denture|Composite|Sealant|Retainer|Diastema|Fiber|Gingivectomy/i.test(
                name
              )
            )
              return tooth;
            if (/Extraction|Surgery|Fluoride/i.test(name)) return checkup;
            return checkup;
          };
          return (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 mt-8 mb-8'>
              {services.map((s) => (
                <div
                  key={s}
                  className='bg-white rounded-lg shadow-md p-5 flex items-center'
                >
                  <span className='mr-3 shrink-0'>
                    <img
                      src={pickImg(s)}
                      alt={s}
                      className='w-10 h-10 object-contain'
                    />
                  </span>
                  <span className='text-sm font-medium'>{s}</span>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </>
  );
}
