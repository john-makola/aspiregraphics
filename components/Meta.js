import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta property="og:image" content="%PUBLIC_URL%/computer.jpg" />
      <meta
        property="og:image:secure_url"
        content="%PUBLIC_URL%/computer.jpg"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Web and Mobile Apps Development",
  keywords:
    "Web-Apps, Management Information Systems, CRM, Nairobi, Kenya, Programming, ReactJs, NodeJs, Project Management Systems, Learning Management Systems",
  description:
    "We provide Software Development Solutions for FrontEnd, BackEnd or Full Stack. Contact us for Microsoft Azure, AWS Hosting, MPESA Intergration ",
};

export default Meta;
