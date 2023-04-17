import Image from "next/image";
import Head from "next/head";

export default function henry({ data }) {
  const { content } = data;
  console.log("content", content);
  return (
    <>
      <Head>{data.title}</Head>
      <h1>{content.heading}</h1>
      <p>{content.text}</p>
      <Image
        src={content.image.src}
        alt={content.image.alt}
        width={content.image.width}
        height={content.image.height}
        sizes="(max-width:750px) 100vw, 750px"
      />
      <Image
        src={"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"}
        alt="Cute dog"
        width="4240"
        height="2832"
        sizes="(max-width:750px) 100vw, 750px"
      />
    </>
  );
}

export async function getStaticProps() {
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/henry";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
}

/*Routes
https://nextjs.org/docs/routing/introduction

Dynamic routing
https://nextjs.org/docs/routing/dynamic-routes*/

/*
import Image from 'next/image'

function Home() {
  return (
    
    <Image 
      src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e" 
      alt="Cute dog" 
      width="4240" 
      height="2832"
    
      //Disables lazy load - do that if img is above the page fold
      priority 
    />

  )
} */
