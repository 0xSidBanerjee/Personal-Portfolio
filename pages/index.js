import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";

// Local Data
import data from "../data/portfolio.json";
export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop-61,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop-61,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 30 },
      { y: 0 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>{data.name} - FullStack Developer</title>
      </Head>
      {/* This button will not go into production */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-5 right-5">
          <Link href="/edit">
            <Button type="primary">Easter Egg</Button>
          </Link>
        </div>
      )}
      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="ml-10 laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-l tablet:text-3xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-extrabold font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-extrabold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-xl tablet:text-5xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-xl tablet:text-5xl laptop:text-6xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div
          className="mt-20 laptop:mt-40 p-2 laptop:p-0 laptop:ml-10"
          ref={workRef}
        >
          <h1 className="mt-20 text-3xl laptop:text-3xl text-bold font-extrabold ">
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400">
              Projects.
            </span>
          </h1>
          <h1 className="mt-1 text-l laptop:text-xl text-bold font-bold text-gray-700">
            Here are some of the projects I&#39;ve worked on.
          </h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <br />
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="text-3xl laptop:text-3xl text-bold font-extrabold tablet:m-10 text-3xl text-bold font-extrabold">
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400">
              Work.{" "}
            </span>
          </h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="text-3xl laptop:text-3xl text-bold font-extrabold tablet:m-10 text-3xl text-bold font-extrabold">
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-yellow-200">
              Hooked Yet?{" "}
            </span>
            🤙
          </h1>
          <p className="text-gray-400 font-medium tablet:m-10 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
            <br />
            <span>{data.nextline}</span>
            <br />
            <span className="text-xl font-medium text-gray-400">
              {data.lastline}
            </span>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}