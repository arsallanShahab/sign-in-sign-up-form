import React, { useEffect, useState } from "react";

const HomescreenRIght = () => {
  const [image, setImage] = useState({
    name: "",
    src: "",
  });

  const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
  };

  const backgroundImages = [
    {
      name: "busy-project-manager-overwhelmed-by-work",
      src: "./image-1.png",
    },
    {
      name: "people-collaborating-or-sharing-a-message",
      src: "./image-2.png",
    },
    {
      name: "mobile-map-and-navigation",
      src: "./image-3.png",
    },
    {
      name: "startups,-entrepreneurship-and-growth",
      src: "./image-4.png",
    },
  ];

  useEffect(() => {
    const num = randomNumber(backgroundImages.length);
    setImage({
      name: backgroundImages[num].name,
      src: backgroundImages[num].src,
    });
  }, []);
  return (
    <div className="h-full w-1/2 overflow-hidden object-cover font-poppins">
      <img
        src={`${image.src}`}
        alt={`${image.name}`}
        className="h-auto w-full"
      />
    </div>
  );
};

export default HomescreenRIght;
