export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <h1>This is Sales layout</h1>
      {children}
      <h1>This is below children</h1>
      </body>
    </html>
  );
}
