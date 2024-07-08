import { HeroI, Search, Link, Home, Logo, searchg } from '..';
export default function Navbar() {
   return (
      <header className='relative flex flex-col items-center w-full justify-between bg-[#CCE7D0]'>
         <nav className='sm:flex hidden absolute top-10 left-[10%] flex-row items-center z-10 w-[80%] justify-between mx-auto rounded-full py-2 px-16 shadow bg-[#004403]'>
            <img src={Logo} className='object-cover w-[7%]' alt='logo' />
            <div className='rounded-full shadow border border-white px-3 w-[40%] flex flex-row items-center'>
               <img src={Search} className='object-cover w-[5%] ml-3' alt='search icon' />
               <input
                  type='search'
                  className='outline-none p-2 shadow text-white font-sora bg-transparent w-[95%]'
                  placeholder='Search for product'
               />
            </div>
            <div className='flex flex-row items-center w-[45%] justify-between'>
               <ul className='flex flex-row items-center gap-10'>
                  <div className='flex flex-col items-center'>
                     <li className='flex flex-row items-center gap-3 justify-center'>
                        <img src={Home} className='object-cover w-[11%]' alt='home link' />
                        <span className='font-sora font-thin text-center text-base text-orange-300'>Home</span>
                     </li>
                     <span className=' h-[0.5px] bg-orange-300 mt-1 w-[70px]'></span>
                  </div>
                  <li className='font-sora font-thin text-center text-base text-white'>Shop</li>
                  <li className='font-sora font-thin text-center text-base text-white'>Account</li>
               </ul>
               <img src={Link} className='object-cover w-[4%]' alt='home link' />
               <button className='bg-white rounded-full py-2 px-7 shadow font-medium font-sora text-orange-400'>Contact</button>
            </div>
         </nav>
         <div className='w-full'>
            <SmNav />
         </div>
         <div className='rounded-full shadow border border-[#016134] px-3 w-[90%] z-40 mt-10 mb-7 sm:hidden flex flex-row items-center'>
            <img src={searchg} className='object-cover w-[5%] ml-3' alt='search icon' />
            <input
               type='search'
               className='outline-none p-2 placeholder:text-[#016134] shadow text-white font-sora bg-transparent'
               placeholder='Search for product'
            />
         </div>
         <div className='flex flex-row items-center w-full bg-[#CCE7D0]  z-0 sm:max-h-[400px] max-h-[290px] pb-4 shadow -mt-[15%]'>
            <div className='w-full sm:w-3/5 h-[400px] bg-[#CCE7D0] flex justify-center'>
               <section className='flex flex-col items-start sm:w-3/5 w-[90%] mx-auto gap-4 h-4/5 justify-center self-end'>
                  <p className='sm:text-5xl text-3xl font-san3 text-start font-semibold w-full mx-0 text-[#004403]'>
                     Shop from the best instrument plug
                  </p>
                  <p className='font-san3 font-medium text-sm text-start w-4/5 text-black text-opacity-75 mt-2'>
                     It all starts with a click and you are one step ahead to finding your dream <br />
                     speaker with quality
                  </p>
                  <div className='flex flex-row items-center w-4/5 justify-between sm:mt-7 my-5'>
                     <button className='rounded-xl py-2 sm:py-3 sm:px-14 px-9 shadow font-san3 text-base text-white bg-[#004403]'>
                        Sign in
                     </button>
                     <button className='rounded-xl py-2 sm:py-3 sm:px-14 px-9 font-san3 text-base border-black border'>Sign up</button>
                  </div>
               </section>
            </div>
            <img src={HeroI} alt='hero_img' className='sm:flex hidden object-cover object-center h-[400px] w-2/5' />
         </div>
      </header>
   );
}

export function SmNav() {
   return (
      <nav className='sm:hidden sticky top-0 z-50 flex flex-row items-center w-full justify-between bg-[#016134] p-6'>
         <div className='w-[45%]'>
            <img src={Logo} className='object-cover w-[65%]' alt='logo' />
         </div>
         <div className='flex flex-row items-center gap-10 w-[55%] justify-end'>
            <img src={Link} className='object-cover w-[10%]' alt='home link' />
            <i className='material-icons text-2xl text-white'>menu</i>
         </div>
      </nav>
   );
}
