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
        <div className="w-1/2 h-full overflow-y-auto">
          <div className="h-full p-[2em]">
            <div className=" bg-tea-green p-[1.25em] rounded-lg border-[1px] border-blue-saphire/25">
              <div className="py-[2em] px-[1em]">
                <h1 className="text-blue-saphire text-6xl font-sora font-extrabold ">
                  Create your acccount
                </h1>
              </div>
              <form action="">
                <div className="flex flex-row flex-wrap flex-grow gap-3 input-container p-[1em] bg-white/75 rounded-lg">
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
                  className="w-full my-6 p-4 rounded-lg text-sm font-[600] font-poppins transition-colors bg-blue-saphire border-[1px] border-blue-saphire hover:bg-ocean-green text-peach hover:text-blue-saphire duration-300"
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
