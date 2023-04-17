import Head from "next/head";
import Image from "next/image";

export default function Dogs({ data }) {
  const { content } = data;
  // console.log("content", content);
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
    </>
  );
}

//it's preferred to use getStaticProps
export async function getServerSideProps(context) {
  // console.log(context);
  // console.log("context.param.slug", context.params.slug); //see terminal
  const slug = context.params.slug;
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
  const res = await fetch(api);
  //   console.log(res.status);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      data: data,
    },
  };
}

//http://localhost:3000/dogs/bufas or snoopy - see: https://bucolic-bombolone-857476.netlify.app/api/dogs
