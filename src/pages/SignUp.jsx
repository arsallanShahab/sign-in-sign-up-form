import React from "react";
import HomescreenRight from "../components/HomescreenRight";
import HomescreenLeft from "../components/HomescreenLeft";

const SignUp = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="flex flex-row wrap flex-center w-full h-full">
        <HomescreenLeft />
        <HomescreenRight />
      </div>
    </div>
  );
};

export default SignUp;
