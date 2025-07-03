import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Professional Software Developer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I am a dedicated software developer with a strong foundation in modern web technologies, specializing in building scalable and efficient applications using JavaScript, React.js, and Next.js. My expertise includes full-stack development, cloud integration, and user-centric design. I am committed to delivering high-quality solutions that drive business value and enhance user experience. I continuously seek to expand my skill set and stay updated with the latest advancements in technology.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            500+ <sub className="font-semibold text-base">leetcode problems solve</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-lg p-6 w-full h-full">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode Logo" className="w-8 h-8" />
              <h3 className="font-semibold text-xl md:text-2xl text-yellow-400">LeetCode Stats</h3>
            </div>
            <span className="font-bold text-3xl text-accent mb-1">540+</span>
            <span className="text-base md:text-lg text-gray-900 dark:text-white mb-2">problems solved</span>
            <a
              href="https://leetcode.com/amriteshrajgupta69/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-300 text-gray-900 font-semibold px-4 py-1 rounded hover:bg-yellow-400 transition mt-2"
            >
              View LeetCode Profile
            </a>
          </div>
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=cpp,appwrite,bootstrap,cloudflare,css,d3,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Skills & Languages"
            loading="lazy"
          />
        </ItemLayout>


      
      </div>
    </section>
  );
};

export default AboutDetails;
