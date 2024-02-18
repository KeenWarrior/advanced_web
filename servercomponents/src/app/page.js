import styles from "./page.module.css";

async function getTime() {
  const response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata", {
    cache: "no-store"
  });
  const data = await response.json();
  return data;

}

export default async function Home() {

  const time = await getTime();

  return (
    <main className={styles.main}>
      <h3>
        {time.datetime}
      </h3>
    </main>
  );
}
