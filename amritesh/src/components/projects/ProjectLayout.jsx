import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink }) => {
  const [showFull, setShowFull] = useState(false);
  const maxDescLength = 60;
  const isLong = description.length > maxDescLength;
  const shortDesc = isLong ? description.slice(0, maxDescLength) + "..." : description;

  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex flex-col md:flex-row items-start md:items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg gap-2 md:gap-0"
    >
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full md:w-auto">
        <h2 className="text-foreground font-bold text-lg md:text-xl mb-1 md:mb-0 truncate max-w-xs md:max-w-xs lg:max-w-sm">{name}</h2>
        <span className="text-muted hidden sm:inline-block max-w-xs md:max-w-xs lg:max-w-md">
          {isLong ? (
            <>
              {shortDesc}
              <span
                className="text-blue-500 cursor-pointer ml-1 underline"
                title={description}
                onClick={e => { e.preventDefault(); setShowFull(true); }}
              >
                more
              </span>
              {showFull && (
                <span className="absolute z-50 bg-white text-black p-2 rounded shadow-lg border mt-2 ml-2 max-w-xs" onClick={e => { e.stopPropagation(); setShowFull(false); }}>
                  {description}
                </span>
              )}
            </>
          ) : (
            description
          )}
        </span>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted hidden md:block" />
      <p className="text-muted sm:text-foreground mt-2 md:mt-0 md:ml-4 whitespace-nowrap font-semibold text-base md:text-lg">
        {new Date(date).toLocaleDateString("en-GB", { year: 'numeric', month: 'short', day: 'numeric' })}
      </p>
    </ProjectLink>
  );
};

export default ProjectLayout;
