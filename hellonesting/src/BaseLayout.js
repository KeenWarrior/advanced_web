export default function BaseLayout({ children }) {
  return (
    <div>
      <h1>This is above children</h1>
      {children}
      <h1>This is below children</h1>
    </div>
  );
}
