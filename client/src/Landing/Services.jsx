import { useState } from 'react';
import { Link } from 'react-router';
import { FaWhatsapp } from 'react-icons/fa';

import braces from '../assets/braces.png';
import cavity from '../assets/cavity.png';
import checkup from '../assets/checkup.png';
import tooth from '../assets/tooth.png';
import whitening from '../assets/whitening.png';

const categories = ['All', 'General Care', 'Braces & Alignment', 'Cosmetic', 'Surgery & Advanced'];

const services = [
  // General Care
  {
    name: 'Dental Checkup',
    category: 'General Care',
    img: checkup,
    desc: 'A complete examination of your teeth, gums and mouth. We check for cavities, gum problems and early signs of disease — so small issues are caught before they become painful and expensive.',
    who: 'Recommended every 6 months for all ages.',
  },
  {
    name: 'Scaling & Polishing',
    category: 'General Care',
    img: whitening,
    desc: 'Professional cleaning that removes plaque, tartar and stains that daily brushing cannot reach. Leaves your teeth smooth, fresh and helps prevent gum disease and bad breath.',
    who: 'Gentle and painless — most patients do it twice a year.',
  },
  {
    name: 'Composite Filling',
    category: 'General Care',
    img: cavity,
    desc: 'Tooth-coloured filling to repair cavities or chipped teeth. The material blends naturally with your tooth, so no one can tell you have had a filling.',
    who: 'Done in a single visit.',
  },
  {
    name: 'Extraction',
    category: 'General Care',
    img: checkup,
    desc: 'Safe and comfortable removal of a badly damaged or decayed tooth when it cannot be saved. We use effective numbing so the procedure is as painless as possible.',
    who: 'Simple cases usually take under 30 minutes.',
  },
  {
    name: 'Fluoride Varnish',
    category: 'General Care',
    img: checkup,
    desc: 'A quick, protective coating painted onto teeth to strengthen enamel and make it more resistant to decay. Especially helpful for children and people prone to cavities.',
    who: 'Great for kids — takes only a few minutes.',
  },
  {
    name: 'Fissure Sealant',
    category: 'General Care',
    img: checkup,
    desc: 'A thin protective layer painted over the deep grooves of back teeth where food and bacteria get trapped. It blocks decay before it can start.',
    who: 'Painless — no drilling involved.',
  },

  // Braces & Alignment
  {
    name: 'Metal Braces',
    category: 'Braces & Alignment',
    img: braces,
    desc: 'The time-tested and most affordable way to straighten teeth. Metal brackets and wires gently move teeth into alignment over time, fixing crowding, gaps and bite problems.',
    who: 'Suitable for all ages; reviewed about once a month.',
  },
  {
    name: 'Self-Ligating Braces',
    category: 'Braces & Alignment',
    img: braces,
    desc: 'Modern braces that use a sliding clip instead of elastic ties. This means less friction, often faster results, fewer clinic visits and easier cleaning.',
    who: 'A comfortable upgrade from traditional braces.',
  },
  {
    name: 'Essix & Hawley Retainer',
    category: 'Braces & Alignment',
    img: tooth,
    desc: 'After braces, retainers keep your teeth in their new position. Essix is a clear, invisible tray; Hawley is a durable removable appliance. Both prevent teeth from shifting back.',
    who: 'Essential after any braces treatment.',
  },

  // Cosmetic
  {
    name: 'Professional Whitening',
    category: 'Cosmetic',
    img: whitening,
    desc: 'A safe whitening treatment that lifts years of stains from coffee, tea and smoking — several shades brighter, far beyond what home kits can achieve.',
    who: 'Noticeable results in one visit.',
  },
  {
    name: 'Composite & Ceramic Veneer',
    category: 'Cosmetic',
    img: tooth,
    desc: 'Thin, custom-made coverings placed over the front of teeth to improve shape, colour and minor imperfections. Ceramic veneers are stain-resistant and long-lasting; composite veneers are a faster, budget-friendly option.',
    who: 'Perfect for chipped, discoloured or uneven teeth.',
  },
  {
    name: 'Crown & Bridge',
    category: 'Cosmetic',
    img: tooth,
    desc: 'A crown caps and protects a weakened or root-treated tooth, restoring its strength and appearance. A bridge fills the gap left by missing teeth using neighbouring teeth as support.',
    who: 'Looks and works like natural teeth.',
  },
  {
    name: 'Midline Diastema Closure',
    category: 'Cosmetic',
    img: tooth,
    desc: 'Closes the gap between the two front teeth using composite bonding, veneers or braces — depending on the size of the gap and your preference.',
    who: 'Often completed in a single visit.',
  },
  {
    name: 'Fiber Reinforced Composite',
    category: 'Cosmetic',
    img: tooth,
    desc: 'A strong fibre mesh embedded inside composite filling to replace a missing tooth or stabilise loose teeth — a minimally invasive alternative to more complex work.',
    who: 'No drilling of neighbouring teeth needed.',
  },

  // Surgery & Advanced
  {
    name: 'Root Canal Treatment',
    category: 'Surgery & Advanced',
    img: tooth,
    desc: 'Saves a badly infected tooth by removing the inflamed nerve, cleaning the canals and sealing them. Relieves severe toothache and avoids extraction.',
    who: 'With modern numbing, it feels similar to a filling.',
  },
  {
    name: 'Minor Oral Surgery',
    category: 'Surgery & Advanced',
    img: checkup,
    desc: 'Minor procedures such as removing impacted wisdom teeth or stubborn roots, performed under local anaesthesia with careful aftercare instructions.',
    who: 'Done in-clinic; recovery is usually quick.',
  },
  {
    name: 'Acrylic & Flexible Denture',
    category: 'Surgery & Advanced',
    img: tooth,
    desc: 'Removable replacements for missing teeth. Acrylic dentures are economical and sturdy; flexible dentures are thinner, more comfortable and virtually invisible.',
    who: 'Restores chewing and confidence in your smile.',
  },
  {
    name: 'Gingivectomy',
    category: 'Surgery & Advanced',
    img: whitening,
    desc: 'Removes excess or overgrown gum tissue to treat gum disease or improve a "gummy" smile. Healing is quick and the result is a cleaner gum line.',
    who: 'Improves both health and appearance.',
  },
];

export default function Services() {
  const [active, setActive] = useState('All');
  const visible =
    active === 'All' ? services : services.filter((s) => s.category === active);

  return (
    <section id='services' className='w-full bg-white rounded-xl shadow-sm p-6 md:p-10'>
      <h2 className='text-2xl md:text-3xl font-bold text-ink'>
        Our <span className='text-brand'>Treatments</span>
      </h2>
      <p className='text-ink/70 mt-2 max-w-2xl'>
        Every treatment explained in plain language — what it is, why you might
        need it, and what to expect. Unsure which is right for you? Message us
        and we&apos;ll guide you.
      </p>

      <div className='flex flex-wrap gap-2 mt-6'>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
              active === c
                ? 'bg-brand text-white'
                : 'bg-brand-pale text-brand-deep hover:bg-brand/20'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {visible.map((s) => (
          <div
            key={s.name}
            className='border border-brand/15 rounded-xl p-5 flex flex-col hover:shadow-md hover:border-brand/40 transition bg-white'
          >
            <div className='flex items-center gap-3'>
              <span className='w-12 h-12 rounded-full bg-brand-pale flex items-center justify-center shrink-0'>
                <img src={s.img} alt={s.name} className='w-7 h-7 object-contain' />
              </span>
              <div>
                <h3 className='font-semibold text-ink leading-snug'>{s.name}</h3>
                <span className='text-xs text-brand-dark font-medium'>
                  {s.category}
                </span>
              </div>
            </div>
            <p className='text-sm text-ink/75 mt-3 leading-relaxed flex-1'>
              {s.desc}
            </p>
            <p className='text-xs text-brand-deep font-medium mt-3 border-t border-brand/10 pt-3'>
              {s.who}
            </p>
          </div>
        ))}
      </div>

      <p className='text-sm text-ink/60 mt-6'>
        Prices vary by case —{' '}
        <Link
          to='http://www.wasap.my/601167319191'
          className='text-brand-deep font-semibold underline underline-offset-2'
        >
          <FaWhatsapp className='inline mb-0.5' /> WhatsApp us
        </Link>{' '}
        for a free consultation and exact quotation.
      </p>
    </section>
  );
}
