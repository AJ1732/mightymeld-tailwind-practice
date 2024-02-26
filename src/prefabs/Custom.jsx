import { useState } from "react";

export function section() {
  return <section></section>;
}
export function paragraph() {
  return <p>Paragraph</p>;
}
export function funcAdd() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      <p>{count}</p>
    </div>
  );
}
export function box() {
  return <div className="h-5 w-5 bg-grey60"></div>;
}
export function article() {
  return <article className="h-10 w-20 bg-grey60"></article>;
}
export function aside() {
  return <aside className="h-56 w-40 bg-grey60"></aside>;
}
export function main() {
  return <main className="h-56 w-40 bg-grey60"></main>;
}
export function footer() {
  return <footer className="w-full h-10 bg-grey60"></footer>;
}
export function header() {
  return <header className="w-full h-10 bg-grey60"></header>;
}
