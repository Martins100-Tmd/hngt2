import { Card } from '..';
import { useState } from 'react';

export default function HeroI() {
   let [state, setstate] = useState({
      count: 3,
      style: 1,
   });
   return (
      <section className='flex flex-col items-center w-full mt-24'>
         <section className='flex flex-row gap-3 items-center sm:w-2/5 mx-auto w-4/5'>
            <p
               id='shop'
               onClick={() => setstate((prev) => ({ ...prev, count: 3, style: 1 }))}
               className={`font-sora sm:text-xl text-lg cursor-pointer text-center w-full font-semibold ${
                  state.style ? 'text-[#004403] underline' : ''
               }`}
            >
               Special Offers
            </p>
            <p
               onClick={() => setstate((prev) => ({ ...prev, count: 18, style: 0 }))}
               className={`font-sora text-sm cursor-pointer text-center w-full font-semibold text-stone-600 ${
                  !state.style ? 'text-[#004403] underline' : ''
               }`}
            >
               All products
            </p>
         </section>
         <section className='grid sm:grid-cols-3 grid-cols-1 gap-8 items-center w-full mt-4 sm:w-[90%] mx-auto'>
            {Array.from(Array(state.count).keys()).map((item) => {
               return (
                  <div className='w-full' key={item}>
                     <Card />
                  </div>
               );
            })}
         </section>
      </section>
   );
}
