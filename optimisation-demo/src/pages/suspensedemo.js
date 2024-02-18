import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), {
    loading: () => <p>loading...</p>,
    ssr: true,
});

export default function SuspenseDemo() {
  return (
    <div>
      <h1>Image Optimisation</h1>
      <p>This is the image optimisation page</p>
      <Header />
    </div>
  );
}
