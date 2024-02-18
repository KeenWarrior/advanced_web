export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: "100px",
        backgroundColor: "red",
      }}>

      <h1>This is Front Facing Layout</h1>
      {children}
      <h1>This is below children</h1>
      </body>
    </html>
  );
}
