export default function Header() {

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "10vh",
        gap: "10px",
        backgroundColor: "lightgrey",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          flexGrow: 1,
        }}
      >
        My Blog
      </h1>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <a href="/">Home</a>

        <a href="/about">About</a>

        <button
          style={{
            padding: "10px",
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={()=>{
            console.log("Login");
          }}
        >
          Login
        </button>
      </nav>
    </header>
  );
}