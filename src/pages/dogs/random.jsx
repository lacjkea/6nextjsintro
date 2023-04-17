// export default function RandomDog({ imgUrl, data }) {
export default function RandomDog({ imgUrl }) {
  //   console.log(imgUrl);
  //   console.log("data", data);
  return (
    <>
      <h1>Random Dog</h1>
      <img src={imgUrl} alt="Random Dog" />{" "}
    </>
  );
}

export async function getServerSideProps() {
  /* We can do secure stuff down here - I think - server-side */
  const api = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(api);
  const data = await res.json();
  /*  console.log(
    data
  ); /* not "working" /SSR - it's shown in the terminal locally */

  return {
    props: {
      imgUrl: data.message,
      //   data: data,
    },
  };
}
