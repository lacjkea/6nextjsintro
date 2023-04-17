import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      {/*   <Link prefetch={false} href="/dogs/henry">
        {/* npm run build */}{" "}
      Henry
      {/* </Link> */}
      <div>
        <a href="/dogs/henry">Henry</a>
      </div>
    </>
  );
}
