import Image from "next/image";
import styles from "./page.module.css";
import CookieCounter from "@/components/CookieCounter";
import signout from "./actions/signout";

export default function Home() {
  return (
    <main className={styles.main}>
      <CookieCounter />
      <button onClick={signout}>Signout</button>
    </main>
  );
}
