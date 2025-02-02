import About from '../assets/about.png';

export default function about() {
  return <section className='flex bg-secondary px-5'>
            <div className='w-1/2'>
                <img src={About}/>
            </div>
            <div className='w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
               <h1 className='text-4xl text-white border-b-2 mb-5 w-[180px] font-bold border-primary'><span className='text-black'>About</span>-Me</h1>
               <p className='text-white'>information about me as full stack web developer,and im building a responsive Websites</p>
            </div>
                
            </div>
         </section>
}