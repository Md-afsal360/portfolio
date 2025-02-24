import { MdOutlineWhatsapp } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function contact() {
    const config={
        contact:{
            whatsapp:"https://wa.me/919344068588",
            email:"mailto:afsalvalt246@gmail.com",
        }
    }
    return(
        <section className=" bg-primary py-5 flex flex-col justify-center  md:flex-row  md:justify-end px-20 " id="contact">
            <div className="w-1/2 ">
                <h2 className='text-4xl text-white border-b-2 mb-5 w-[180px] font-bold border-secondary'><span className="text-black">Con</span>tact</h2>
                <div className="hover:text-white mb-5 contact">
                <a className="font-bold" href={config.contact.whatsapp}><MdOutlineWhatsapp size={30}/>+91 9344068588</a>
                </div>
                
                <div className="hover:text-white mb-5 contact" >
                <a className="font-bold" href={config.contact.email}><MdOutlineMail size={30}/>afsalvalt246@gmail.com</a>
                </div>
                
                <div className="hover:text-white mb-5 contact">
                <p className="font-bold"><IoLocationOutline size={30}/>No-33,Makkha Street,Chidambaram,608001</p>
                </div>
                
               
                
            </div>
            <div className=" w-1/2 hidden md:block">
            <iframe className="w-[500px] h-[200px]" src="https://lottie.host/embed/e715f12f-2204-4963-925c-78c298f3db22/m76ZoynbRz.lottie" title="lottie-player"/>
            </div>
        </section>
    );
    
}