export default function RootLayout({ children }) {
  return (
      <div style={{
        margin: "100px",
        backgroundColor: "lightgrey",
      }}>
        <h4>Inner Layout</h4>
        {children}
      </div>
  );
}
