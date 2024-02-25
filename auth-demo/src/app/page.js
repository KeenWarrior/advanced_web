import Image from "next/image";
import styles from "./page.module.css";
import CookieCounter from "@/components/CookieCounter";

export default function Home() {
  return (
    <main className={styles.main}>
      <CookieCounter />
    </main>
  );
}
