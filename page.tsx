import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Main from '@/app/components/Main';

export default function Home() {
  return (
  <div className="W-[1400px] h-[1132px] bg-[#252B42]">
    <Navbar/> 
    <Main/>

  </div>
    
  );
}