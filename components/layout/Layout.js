import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {data} from "../../constants/data";

export default function Layout({children, ...customMeta }) {
  
  console.log(data, 'data');
  const meta = {
    title: "",
    description: ``,
    image: "",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}