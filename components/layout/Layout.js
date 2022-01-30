import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();

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