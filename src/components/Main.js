import HeroImg from "../assets/hero.png";
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineInstagram,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";

export default function Main() {
return <section className="flex flex-col-reverse md:flex-row px-5  py-25 md:py-28 md:px-3 bg-primary justify-center" id="home">
         <div className="md:w-1/2 flex flex-col">
           <h1 className="text-white text-6xl font-Main-Font">Hi, <br/> Im<span className="text-black">Mohamed</span> Afsal
           <p className="text-2xl">Im a Full-stack developer</p>
           </h1>
           <div className="flex gap-5 py-10">
                  <a href=" https://twitter.com" className="pr-5 hover:text-white"><AiOutlineTwitter size={40}/></a>
                  <a href="https://www.bing.com/ck/a?!&&p=b84f2da65c669aeaef9879ece0e374a04760ef3c0c636bf6f1b584875be161bdJmltdHM9MTczODI4MTYwMA&ptn=3&ver=2&hsh=4&fclid=3d15a59f-2fc2-65db-3c7f-b0b12e906412&psq=facebook&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLw&ntb=1" className="pr-5 hover:text-white"><AiOutlineFacebook size={40}/></a>
                  <a href="https://www.instagram.com/" className="pr-5 hover:text-white"><AiOutlineInstagram size={40}/></a>
                  <a href="https://www.linkedin.com/" className="pr-5 hover:text-white"><AiOutlineLinkedin size={40}/></a>
                  <a href="http://www.afsal@360.com/" className="hover:text-white"><AiOutlineGithub size={40}/></a>
           </div>
         </div>
         <img className="md:w-1/3 " src={HeroImg} alt="Main-image" />
       </section>

    }