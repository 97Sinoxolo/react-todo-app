import { React } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  console.log(useParams());

  const aboutData = [
    {
      slug: "about-app",
      title: "About the app",
      description:
        "In this app, you can add, delete, submit and items. To  edit items, simply double click on it. Once you are done, press the Enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopen it, you still have access to your todo items.",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description:
        "This app was developed by Sinoxolo Sooi, a self taught Reactjs web developer. He is open to freelance gigs. So connect with Sinoxolo via email: snoxy.sooi@gmail.com",
    },
  ];

  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { title, description } = aboutContent;
  return (
    <div className="main_content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SinglePage;
