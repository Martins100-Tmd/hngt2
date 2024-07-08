import { Footer, Hero1, Navbar } from '..';
import Hero from './Hero';
export default function Layout() {
   return (
      <main className='flex flex-col items-center w-full'>
         <section className='w-full relative'>
            <Navbar />
         </section>
         <Hero />
         <Hero1 />
         <Footer />
      </main>
   );
}
