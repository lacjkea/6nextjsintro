import Anchor from "@/components/Anchor";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to the dog page</title>
      </Head>
      <h1>Hello</h1>
      {/*   <Link prefetch={false} href="/dogs/henry">
        {/* npm run build & look at network - it's prefetching somethings if we don't add this, but still it'll prefetch this on hover */}
      Henry
      {/* </Link> */}
      <div>
        <a href="/dogs/henry">Henry</a>
      </div>
      <div>
        <Anchor href="/dogs/henry">
          Henry - Anchor component (still a single page application without
          prefetching, so that we don't download a lot of data we're not using)
        </Anchor>
      </div>
    </>
  );
}
