import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
// 50:02
export default function Home() {
  return (
    <div>
     <Hero/>

     <CategorySearch/>
    </div>
  );
}
