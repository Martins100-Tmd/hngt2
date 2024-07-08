import { Card } from '..';

export default function HeroI() {
   return (
      <section className='flex flex-col items-center w-full mt-24'>
         <section className='flex flex-row gap-3 items-center sm:w-1/5 mx-auto w-4/5'>
            <p className='font-sora sm:text-xl text-lg text-center w-full font-semibold text-[#004403] underline'>Special Offers</p>
            <p className='font-sora text-sm text-center w-full font-semibold text-stone-600'>All products</p>
         </section>
         <section className='grid sm:grid-cols-3 grid-cols-1 gap-8 items-center w-full mt-4 sm:w-[90%] mx-auto'>
            {Array.from(Array(18).keys()).map((item) => {
               return (
                  <div className='w-full' key={item}>
                     <Card />
                  </div>
               );
            })}
         </section>
         <section className='flex flex-col items-center sm:w-2/5 w-[90%] mt-10 z-40 border border-[#004403] mx-auto -mb-[15%] bg-[#CCE7D0] sm:p-14 py-12 px-5 gap-3 shadow rounded-xl'>
            <p className='font-sora sm:text-base text-xs font-medium text-center'>
               Subscribe to our newsletter and never miss a New
               <br className='sm:flex hidden' /> products and good offers
            </p>
            <div className='flex flex-row items-stretch w-full shadow'>
               <input
                  type='text'
                  className='font-san3 text-sm border rounded-l-lg border-[#004403] sm:py-3 p-2 sm:px-4 w-4/5'
                  placeholder='christian45gupme@gmail.com'
               />
               <button
                  type='button'
                  className='bg-[#004403] sm:px-10 p-2 sm:w-1/4 w-[30%] text-sm font-thin text-white font-sora rounded-r-lg'
               >
                  Suscribe
               </button>
            </div>
         </section>
      </section>
   );
}
