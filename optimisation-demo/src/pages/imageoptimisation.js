import Image from "next/image";
import ironaman from "@/images/ironman.jpeg";

export default function ImageOptimisation() {


    

  return (
    <div>
      <h1>Image Optimisation</h1>
      <p>
        This is the image optimisation page
      </p>
      <Image src={ironaman} alt="Ironman" width={100} />
    </div>
  );
}