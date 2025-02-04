import image1 from '../assets/ecommerce-websites.jpg';
import image2 from '../assets/food-ecommerce.jpg';
import image3 from '../assets/website-blog.jpg';

export default function Projects() {

    const config={
      projects: [
        {
          image: image1,
          description:'about the projects of me to in this list of the metor',
          link:''
        },
        {
          image: image2,
          description:'about the projects of me to in this list of the metor',
          link:''
        },
        {
          image: image3,
          description:'about the projects of me to in this list of the metor',
          link:''
        }
      ]
    }
  return <section className="flex flex-col bg-primary  justify-center h-full pb-5" id='projects'>
       <div className='w-full'>
         <div className='flex flex-col py-5 items-center justify-center'>
          <h1 className='text-4xl text-white border-b-2 mb-5 w-[135px] font-bold border-secondary'><span className='text-black font-bold'>Pro</span>jects</h1>
          <p className='text-white text-center'>this all are i recently created ,using react-js,and springboot</p>
         </div>
       </div>
       <div className='w-full'>
         <div className='flex px-10 gap-5 flex-col md:flex-row'>
          {config.projects.map((project)=>(
            <div className='relative'>
          <img className='h-[200px] w-[500px]' src={project.image} alt='image-prog'/>
          <div className='project-desc'>
            <p className='text-center py-5'>{project.description}</p>
            <a href={project.link} className='text-center text-white bg-secondary py-2 px-5 rounded-md btn'>View Project</a>
          </div>
          </div>
        ))}
          
          
          
         </div>
       </div>
    </section>

}