import { IoCallOutline} from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function contact() {
    return(
        <section className=" bg-primary py-5 flex  md:flex-row flex-col justify-end px-20 ">
            <div className="w-1/2">
                <h2 className='text-4xl text-white border-b-2 mb-5 w-[180px] font-bold border-secondary'><span className="text-black">Con</span>tact</h2>
                <div className="hover:text-white mb-5 contact">
                <a className="font-bold" href="#"><IoCallOutline size={30}/>+91 9344068588</a>
                </div>
                
                <div className="hover:text-white mb-5 contact" >
                <a className="font-bold" href="#"><MdOutlineMail size={30}/>afsalvalt246@gmail.com</a>
                </div>
                
                <div className="hover:text-white mb-5 contact">
                <p className="font-bold"><IoLocationOutline size={30}/>No-33,Makkha Street,Chidambaram,608001</p>
                </div>
                
               
                
            </div>
            <div className=" w-1/2">
                   <iframe className="w-[600px] h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62577.31501718881!2d79.65651429239612!3d11.401576679475548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c23aa1bce10b%3A0xe1a29e91a8ec81aa!2sChidambaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1738379003743!5m2!1sen!2sin" title="Descriptive title for the iframe content"/>
            </div>
        </section>
    );
    
}