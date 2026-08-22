import { FaStar, FaGoogle } from 'react-icons/fa';

const reviews = [
  {
    name: 'APC Faiz Solihin',
    when: 'a year ago',
    text: 'A highly recommended dental clinic, I came all the way from Gombak untuk buat rawatan scaling and to get braces. Dr. Taufiq and the staff are extremely friendly. Alhamdulillah, the scaling procedure was painless, even though I hadn\u2019t done it in 15 years. The braces service was also very thorough and efficient.. 5 star for this clinic!!',
  },
  {
    name: 'A Z',
    when: 'a year ago',
    text: 'Came all the way from Setia Alam for my child\u2019s dental check-up (scaling & polishing) and had a filling done for myself. The doctor was very gentle and skillful, especially with kids. My child felt comfortable throughout the session. Clean clinic, friendly staff, efficient service, and very affordable prices. Highly recommended! \u{1F9B7}',
  },
  {
    name: 'Pyan Ghazali',
    when: '10 months ago',
    text: 'Great experience for my child! Dr Taufiq and team were very friendly, gentle, and made the whole visit stress-free. The clinic is clean and very kid-friendly. Highly recommend.',
  },
];

const MAPS_URL =
  'https://www.google.com/maps/place/KLINIK+PERGIGIAN+AKSARA+BATANG+KALI/@3.46163,101.65796,15z/data=!4m6!3m5!1s0x31cc6d21d738cdf1:0x11dfa4baefa35497!8m2!3d3.4617797!4d101.6578312!16s%2Fg%2F11l2vx5r6_?hl=en&entry=ttu';

function Stars({ className = 'text-amber-400' }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id='reviews' className='w-full bg-white rounded-xl shadow-sm p-6 md:p-10'>
      <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
        <div>
          <h2 className='text-2xl md:text-3xl font-bold text-ink'>
            What Our <span className='text-brand'>Patients Say</span>
          </h2>
          <p className='text-ink/70 mt-2'>
            Real reviews from real patients on Google.
          </p>
        </div>
        <div className='flex items-center gap-4 bg-brand-pale rounded-2xl px-5 py-3 shrink-0'>
          <div>
            <div className='flex items-center gap-2'>
              <span className='text-3xl font-extrabold text-ink'>5.0</span>
              <Stars className='text-amber-400' />
            </div>
            <p className='text-xs text-ink/60 font-medium'>
              Based on 59 Google reviews
            </p>
          </div>
          <FaGoogle className='text-brand text-2xl' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
        {reviews.map((r) => (
          <figure
            key={r.name}
            className='border border-brand/15 rounded-xl p-5 flex flex-col bg-brand-pale/40 hover:shadow-md transition'
          >
            <Stars />
            <blockquote className='text-sm text-ink/80 leading-relaxed mt-3 flex-1'>
              “{r.text}”
            </blockquote>
            <figcaption className='mt-4 pt-3 border-t border-brand/10'>
              <span className='block font-semibold text-ink text-sm'>{r.name}</span>
              <span className='block text-xs text-ink/50'>{r.when} · Google review</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className='mt-6'>
        <a
          href={MAPS_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 text-sm font-semibold text-brand-deep hover:text-brand-dark'
        >
          <FaGoogle /> Read all 59 reviews on Google Maps
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
