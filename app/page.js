import data from "../data.json";
import { FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
import React from 'react';
import Image from 'next/image';


function Avatar({ src, alt }) {
  const containerStyle = "overflow-auto rounded-t-full relative h-48 w-48 sm:h-64 sm:w-64 mb-2";
  const imageStyle = { objectFit: 'cover', objectPosition: 'center' };

  return (
    <div className={containerStyle}>
      <Image
        src={src}
        alt={alt}
        fill
        style={imageStyle}
      />
    </div>
  );
}


export { Avatar };



function LinkCard({ href, title, image }) {
  const cardStyle = "flex items-center w-full border border-gray-300 rounded-md shadow-lg hover:shadow-xl duration-300 hover:scale-105 transition-all mb-4 max-w-3xl bg-white";
  const imageStyle = "rounded-full h-14 w-14 sm:h-24 sm:w-24 relative";
  const titleStyle = "flex justify-center items-center font-semibold w-full -ml-20 text-black";

  return (
    <a href={href} className={cardStyle}>
      {image && (
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSU"
          className={`rounded-full ${imageStyle}`}
        />
      )}
      <div className={titleStyle}>{title}</div>
    </a>
  );
}

export { LinkCard };



function FooterCard({ copyright, description }) {
  const cardStyle = "flex flex-col items-center w-full mt-8 mb-8 max-w-3xl color";
  const dividerStyle = "w-full";
  const hrStyle = "border-t border-gray-300 mb-4";
  const contentStyle = "p-4";
  const titleStyle = "text-xl font-semibold text-center mb-4 text-black";

  return (
    <div className={cardStyle}>
      <div className={dividerStyle}>
        <hr className={hrStyle} />
      </div>
      <div className={contentStyle}>
        <h2 className={titleStyle}>{copyright}</h2>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
}

export {FooterCard};


export default function Home() {
  const parentContainerStyle = "flex flex-col items-center mx-auto w-full justify-center mt-16 px-8";

  return (
    <div className={parentContainerStyle}>
      <Avatar src={data.avatar} alt={data.name} />

      <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

      <div className="flex items-center gap-4 mt-8">
        {data.socials.map((link) => {
          if (link.href.includes("linkedin")) {
            return <FiLinkedin key={link.href} size={20} />;
          }
          if (link.href.includes("github")) {
            return <FiGithub key={link.href} size={20} />;
          }
          if (link.href.includes("youtube")) {
            return <FiYoutube key={link.href} size={20} />;
          }
          return null;
        })}
      </div>

      <div>
        {data.footer.map((footer) => (
          <FooterCard key={footer.id} {...footer} />
        ))}
      </div>
    </div>
  );
}



