export default function Header() {

  return (
    <header>
      <h1>Header</h1>
        <WastingResources />
    </header>
  );
}


function WastingResources() {

    const arr = new Array(10000).fill(0);

  return (
    <div>
      <h1>Wasting Resources</h1>
      {
        arr.map((_, index) => <p key={index}>{index}</p>)
      }
    </div>
  );
}