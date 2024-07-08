import { Speak, Star } from '..';

export default function Card() {
   return (
      <section className='flex flex-col items-center w-[95%] mx-auto p-3 rounded-xl gap-4' id='mani'>
         <img src={Speak} className='object-cover w-[45%]' alt='spek_img' />
         <p className='font-sora text-sm text-center w-full font-semibold'>Speaker Model</p>
         <p className='font-sora text-sm text-center w-full font-semibold'>Sp135</p>
         <p className='font-sora text-sm text-center w-full font-semibold'>N1,000,000</p>
         <p className='font-sora text-sm text-center w-full font-semibold'>15 Inch / 4800watt / Pure Acostic / 100 coil /Double magnet</p>
         <div className='flex flex-row items-center gap-2 sm:w-2/5 w-3/5 mx-auto'>
            <img src={Star} className='object-cover w-[3%]' alt='star_img' />
            <img src={Star} className='object-cover w-[3%]' alt='star_img' />
            <img src={Star} className='object-cover w-[3%]' alt='star_img' />
            <img src={Star} className='object-cover w-[3%]' alt='star_img' />
            <img src={Star} className='object-cover w-[3%]' alt='star_img' />
            <img src={Star} className='object-cover w-[3%]' alt='star_img' />
         </div>
         <div className='flex flex-row items-center w-4/5 mx-auto justify-between gap-1'>
            <button className='rounded shadow font-sora text-base text-white sm:py-3 sm:px-6 p-2 bg-[#004403]'>Purchase</button>
            <button className='rounded shadow font-sora text-base text-white sm:py-3 sm:px-6 p-2 bg-orange-400'>Add to cart</button>
            <select className='border border-black p-2 shadow rounded'>
               <option value='1'>1</option>
            </select>
         </div>
      </section>
   );
}
