import Header from "@/components/header";

export default function Page({ last_updated }) {
  return <>
    <Header />

    <p>Last updated: {last_updated}</p>
  </>;
}

export async function getStaticProps() {
  console.log("Within getStaticProps");
    return {
      props: {
            last_updated: new Date().toISOString()
      },
      revalidate: 10,
    };
}
