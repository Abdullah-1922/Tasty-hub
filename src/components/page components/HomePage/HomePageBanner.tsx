
import Image from "next/image";
import bannerImg from "../../../../public/assignment-6-banner.jpg";
import Link from "next/link";

const HomePageBanner = () => {
  return (
    <section
      className="relative h-[calc(100vh-64px)] bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden"
      aria-labelledby="homepage-title"
    >
      <div className="absolute inset-0">
        <Image
          src={bannerImg}
          alt="TastyHub banner background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority={true}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <header className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 id="homepage-title" className="text-5xl font-bold leading-tight mb-4">
          Welcome to Our TastyHub
        </h1>
        <h2 className="text-lg text-gray-300 mb-8">
          Discover the best recipes from around the world
        </h2>
        <Link
          href="/recipe"
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </Link>
      </header>
    </section>
  );
};

export default HomePageBanner;
