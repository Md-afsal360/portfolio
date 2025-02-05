import Resume from '../assets/resume.jpg';

export default function resume() {
   
  return <section className='flex bg-secondary px-5 flex-col md:flex-row pb-5' id='resume'>
            <div className='py-5 md:w-1/2 flex justify-end '>
                <img className='w-[300px]' src={Resume} alt='Resume-image'/>
            </div>
            <div className='w-full md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center '>
               <h1 className='text-4xl text-white border-b-2 mb-3 w-[180px] font-bold border-primary'>Res<span className='text-black'>ume</span></h1>
               <p className='text-white'>you can download my resume here</p>
               <a className='btn mt-5' href='https://export-download.canva.com/-3v-Y/DAGaBB-3v-Y/31/0-8439075127565723689.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20250204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250204T043935Z&X-Amz-Expires=8416&X-Amz-Signature=8c246dce0d90426ff5caa0205a5b8983768aafc556f305e1450b157ff4960e74&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Minimalist%2520White%2520and%2520Grey%2520Professional%2520Resume.pdf&response-expires=Tue%2C%2004%20Feb%202025%2006%3A59%3A51%20GMT' download="resume-afsal">Download</a>
            </div>
                
            </div>
         </section>
}