import { Footer, Navbar, Speak, cart, purchase } from '..';
import { Link } from 'react-router-dom';

export default function Checkout() {
   return (
      <section className='flex flex-col items-center w-full h-screen'>
         <section className='w-full relative'>
            <Navbar remove={true} />
         </section>
         <section className='flex flex-col items-center sm:w-[80%] w-[95%]'>
            <div className='sm:w-1/4 p-3 shadow rounded flex justify-center bg-green-800 mt-4'>
               <p className='font-sora text-white text-xl text-center'>Check Out</p>
            </div>
            <div className='flex sm:flex-row flex-col-reverse gap-10 items-center w-full self-stretch'>
               <div className='flex flex-col items-start sm:w-[43%] w-[90%] mx-auto gap-4 self-start'>
                  <p className='font-sora text-green-800 text-start text-2xl font-semibold'>Customers Details</p>
                  <div className='grid sm:grid-cols-3 grid-cols-2 gap-3 items-start w-full justify-between'>
                     <div className='flex flex-col items-start w-full'>
                        <input type='text' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                        <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                           First name
                        </label>
                     </div>
                     <div className='flex flex-col items-start w-full'>
                        <input type='text' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                        <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                           Middle name
                        </label>
                     </div>
                     <div className='flex flex-col items-start w-full'>
                        <input type='text' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                        <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                           Last name
                        </label>
                     </div>
                  </div>
                  <div className='flex flex-col items-start w-full justify-center'>
                     <div className='flex flex-col items-start w-full'>
                        <input type='email' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                        <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                           Email
                        </label>
                     </div>
                     <div className='flex flex-col items-start w-full'>
                        <input type='number' id='inp' className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora' />
                        <label htmlFor='inp' className='font-sora text-sm text-green-700 text-start'>
                           Phone number
                        </label>
                     </div>
                  </div>

                  <div className='flex flex-col items-center w-full'>
                     <input
                        type='text'
                        id='inp'
                        placeholder='please select'
                        className='w-full outline-none border rounded-lg p-3 border-green-800 font-sora'
                     />
                     <label htmlFor='inp' className='font-sora text-sm w-full text-green-700 text-start'>
                        Preferred Location
                     </label>
                  </div>
                  <div className='flex flex-row items-center gap-4'>
                     <i className='material-icons text-xl'>check_box_outline_blank</i>
                     <p className='text-sm font-semibold text-start'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim a
                     </p>
                  </div>
               </div>
               <div className='rounded shadow p-3 sm:w-1/3 w-full flex flex-col h-full justify-between self-stretch items-center gap-4 bg-[#CCE7D0]'>
                  <div className='flex flex-col sm:flex-row items-center w-full'>
                     <img src={Speak} className='object-cover sm:w-1/5 w-full' alt='img' />
                     <div className='ml-10 flex flex-col items-start w-3/4 gap-5'>
                        <p className='font-sora text-lg text-start'>SP134</p>
                        <p className='font-sora text-xl text-start font-semibold'>N1,000,000</p>
                     </div>
                  </div>
                  <div className='flex flex-col sm:flex-row items-center w-full'>
                     <img src={Speak} className='object-cover sm:w-1/5 w-full' alt='img' />
                     <div className='ml-10 flex flex-col items-start w-3/4 gap-5'>
                        <p className='font-sora text-lg text-start'>SP134</p>
                        <p className='font-sora text-xl text-start font-semibold'>N1,000,000</p>
                     </div>
                  </div>
                  <div className='flex flex-col gap-2 sm:flex-row items-center w-full'>
                     <img src={Speak} className='object-cover sm:w-1/5 w-full' alt='img' />
                     <div className='ml-10 flex flex-col items-start w-3/4 gap-5'>
                        <p className='font-sora text-lg text-start'>SP134</p>
                        <p className='font-sora text-xl text-start font-semibold'>N1,000,000</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className='h-[3px] bg-green-950 sm:w-[90%] w-full text-transparent my-10 '>.</div>
         <section className='flex flex-col items-center sm:w-3/5 mx-auto w-[95%] mt-3 sm:mt-10 h-full justify-between'>
            <div className='flex flex-row items-center w-full justify-between mb-3 sm:mb-14'>
               <p className='font-sora text-2xl text-start text-stone-800 self-start justify-start w-full'>Total</p>
               <div className='flex flex-col items-center w-full justify-end'>
                  <p className='font-sora text-2xl self-end text-center'>N1,000,000</p>
                  <p className='font-sora text-xs text-center self-end'>Home delivery charge included</p>
               </div>
            </div>
            <div className='flex sm:flex-row items-center flex-col w-full gap-3 justify-center sm:justify-between'>
               <button className='bg-[#016134] py-4 px-5 flex flex-row items-center gap-3 justify-center sm:w-[200px] w-full'>
                  <img src={purchase} className='w-[11%] object-cover' alt='cart' />
                  <span className='font-sora text-white text-center text-sm'>Purchase</span>
               </button>
               <button className='bg-[#dd7a29] py-4 px-5 flex flex-row items-center gap-3 justify-center sm:w-[200px] w-full'>
                  <img src={cart} className='w-[11%] object-cover' alt='cart' />
                  <span className='font-sora text-white text-center text-sm'>
                     <Link to={'/aproduct'}>Back to cart</Link>
                  </span>
               </button>
            </div>
         </section>
         <Footer style='bg-white' />
      </section>
   );
}
