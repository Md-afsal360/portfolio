import Resume from '../assets/resume.jpg';

export default function resume() {
  return <section className='flex bg-secondary px-5 flex-col md:flex-row pb-5' id='resume'>
            <div className='py-5 md:w-1/2 flex justify-end '>
                <img className='w-[300px]' src={Resume}/>
            </div>
            <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
               <h1 className='text-4xl text-white border-b-2 mb-5 w-[180px] font-bold border-primary'>Res<span className='text-black'>ume</span></h1>
               <p className='text-white'>you can see my resume here <a className='btn' href='#'>Download</a></p>
            </div>
                
            </div>
         </section>
}