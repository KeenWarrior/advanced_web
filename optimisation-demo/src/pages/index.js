
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();

  return (
    <>
      {/* <ul>
        <li>
          <a href="/imageoptimisation">Image Optimisation</a>
        </li>
        <li>
          <a href="/suspensedemo">Suspense Demo</a>
        </li>
      </ul> */}
      <button onClick={()=>{
          router.push("/imageoptimisation");
      }}>Click to jump to Image Optimisation</button>

      {/* <ul> */}

        {/* <li>
          <Link href="/imageoptimisation">Image Optimisation</Link>
        </li>
        <li>
          <Link href="/suspensedemo">Suspense Demo</Link>
        </li> */}
      {/* </ul> */}
    </>
  );
}
