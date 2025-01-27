import HeroImg from "../assets/hero.png";
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineInstagram,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";

export default function Main() {
return <section className="flex flex-col-reverse md:flex-row px-5 py-32 bg-primary justify-center">
         <div className="md:w-1/2 flex flex-col">
           <h1 className="text-white text-6xl font-Main-Font">Hi, <br/> Im<span className="text-black">Mohamed</span> Afsal
           <p className="text-2xl">Im a Full-stack developer</p>
           </h1>
           <div className="flex gap-5 py-10">
                  <a href="#" className="pr-5 hover:text-white"><AiOutlineTwitter size={40}/></a>
                  <a href="#" className="pr-5 hover:text-white"><AiOutlineFacebook size={40}/></a>
                  <a href="#" className="pr-5 hover:text-white"><AiOutlineInstagram size={40}/></a>
                  <a href="#" className="pr-5 hover:text-white"><AiOutlineLinkedin size={40}/></a>
                  <a href="#" className="hover:text-white"><AiOutlineGithub size={40}/></a>
           </div>
         </div>
         <img className="md:w-1/3 " src={HeroImg} alt="hero" />
       </section>

    }