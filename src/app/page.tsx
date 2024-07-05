import Image from "next/image";
import homeImage from "public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    
    <div>
      <Hero imgData={homeImage} imgAlt="car factory" title="Professional Cloud Hosting" />
    </div>
  );
}
