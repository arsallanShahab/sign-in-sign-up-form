import React from "react";
import Input from "./components/Input";

const App = () => {
  const backgroundImages = [
    {
      name: "alex-perez-pEgsWN0kwbQ-unsplash",
      src: "./image-1.jpg",
    },
    {
      name: "alice-butenko-zstWUZFj77w-unsplash",
      src: "./image-2.jpg",
    },
    {
      name: "omar-flores-lQT_bOWtysE-unsplash",
      src: "./image-3.jpg",
    },
    {
      name: "s-o-c-i-a-l-c-u-t-OjnmCKmzr3A-unsplash",
      src: "./image-4.jpg",
    },
  ];

  const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
  };

  const imageUrl = backgroundImages[randomNumber(backgroundImages.length)];

  return (
    <div className="h-screen w-full relative">
      <div className="flex flex-row wrap flex-center w-full h-full">
        <div className="w-1/2">
          <div className="h-full p-[2em]">
            <div className="bg-peach p-[1em] rounded-lg">
              <div className="py-[2em] px-[1em]">
                <h1 className="text-dark-blue text-6xl font-sora font-extrabold ">
                  Create your acccount
                </h1>
              </div>
              <form action="">
                <div className="flex flex-row flex-wrap flex-grow gap-3 input-container p-[1em] bg-white rounded-lg">
                  <Input
                    name="First Name"
                    placeholder="Jhon"
                    type="text"
                    width="flex-[45%]"
                    required="true"
                  />
                  <Input
                    name="Last Name"
                    placeholder="Doe"
                    type="text"
                    width="flex-[45%]"
                    required="true"
                  />
                  <Input
                    name="Email"
                    placeholder="jhondoe@gmail.com"
                    type="email"
                    width="flex-[55%]"
                    required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-3 p-5 rounded-lg bg-white"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 overflow-hidden object-cover">
          <img
            src={`${imageUrl.src}`}
            alt={`${imageUrl.name}`}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
