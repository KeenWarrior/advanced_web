export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <h1>This is Marketing Layout</h1>
      {children}
      <h1>This is below children</h1>
      </body>
    </html>
  );
}
