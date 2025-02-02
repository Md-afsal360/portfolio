import image1 from '../assets/ecommerce-websites.jpg';
import image2 from '../assets/food-ecommerce.jpg';
import image3 from '../assets/website-blog.jpg';

export default function Projects() {
  return <section className="flex flex-col bg-primary  justify-center h-full pb-5" id='projects'>
       <div className='w-full'>
         <div className='flex flex-col py-5 items-center justify-center'>
          <h1 className='text-4xl text-white border-b-2 mb-5 w-[135px] font-bold border-secondary'><span className='text-black font-bold'>Pro</span>jects</h1>
          <p className='text-white text-center'>this all are i recently created ,using react-js,and springboot</p>
         </div>
       </div>
       <div className='w-full'>
         <div className='flex px-10 gap-5 flex-col md:flex-row'>
          <div className='relative'>
          <img className='h-[200px] w-[500px]' src={image1}/>
          <div className='project-desc'>
            <p className='text-center py-5'>about the projects of me to in this list of the metor</p>
          </div>
          </div>

          <div className='relative'>
          <img className='h-[200px]  w-[500px]' src={image2}/>
          <div className='project-desc'>
            <p className='text-center py-5'>about the projects of me to in this list of the metor</p>
          </div>
          </div>
          
          <div className='relative'>
          <img className='h-[200px]  w-[500px]' src={image3}/>
          <div className='project-desc'>
            <p className='text-center py-5'>about the projects of me to in this list of the metor</p>
          </div>
          </div>
          
          
         </div>
       </div>
    </section>

}