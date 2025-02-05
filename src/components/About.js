import About from '../assets/about.png';

export default function about() {
  return <section className='flex flex-col justify-center md:flex-row  bg-secondary px-5' id='about'>
            <div className='md:w-1/2'>
                <img src={About} alt='image-about'/>
            </div>
            <div className='md:w-1/2 flex pb-5 md:py-10'>
            <div className='flex flex-col gap-5'>
               <h1 className='text-4xl text-white border-b-2 mb-5 w-[180px] font-bold border-primary'><span className='text-black'>About</span>-Me</h1>
               <p className='text-white font-bold'>*Passionate Full Stack Developer with expertise in modern frontend and backend technologies.</p>
               <p className='text-white font-bold'>*Skilled in React.js, JavaScript, and UI frameworks like Tailwind CSS and Bootstrap for building dynamic user interfaces.</p>
               <p className='text-white font-bold'>*Proficient in backend development using Laravel, PHP, Spring Boot, and Java to create scalable and efficient applications.</p>
               <p className='text-white font-bold'>*Always eager to learn and implement cutting-edge technologies to deliver high-quality solutions.</p>
            </div>
                
            </div>
         </section>
}