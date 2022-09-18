import React, { useState } from "react";
import { login } from "../firebase/Auth";
import Input from "./Input";

const SignUp = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialFormData);

  const onChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-1/2 h-full p-[2em] pt-[2.75em]  overflow-y-auto scrollbar">
      <div className="block relative h-full">
        <div className="relative bg-tea-green p-[1.25em] rounded-lg border-[1px] border-blue-saphire/25">
          <div className="py-[2em] px-[1em]">
            <h1 className="text-blue-saphire text-6xl font-sora font-extrabold ">
              Create your acccount
            </h1>
          </div>
          <form action="" onSubmit={submit}>
            <div className="flex flex-row flex-wrap flex-grow gap-3 input-container px-[1em] py-[1.5em] my-[.5em] bg-white/75 rounded-lg">
              <Input
                label="First Name"
                name="firstName"
                placeholder="Jhon"
                type="text"
                width="flex-[45%]"
                required="true"
                onChange={onChange}
              />
              <Input
                label="Last Name"
                name="lastName"
                placeholder="Doe"
                type="text"
                width="flex-[45%]"
                required="true"
                onChange={onChange}
              />
              <Input
                label="Email"
                name="email"
                placeholder="jhondoe@gmail.com"
                type="email"
                width="flex-[55%]"
                required="true"
                onChange={onChange}
              />
              <Input
                label="Password"
                name="password"
                placeholder="••••••••••"
                type="Password"
                width="flex-[55%]"
                required="true"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 p-4 rounded-lg text-sm font-[600] font-poppins transition-colors bg-blue-saphire border-[1px] border-blue-saphire hover:bg-ocean-green text-peach hover:text-blue-saphire duration-300"
            >
              submit
            </button>
            <button
              onClick={login}
              type="button"
              className="w-full my-6 p-4 rounded-lg text-sm cursor-pointer font-[600] font-poppins transition-colors bg-blue-saphire border-[1px] border-blue-saphire hover:bg-ocean-green text-peach hover:text-blue-saphire duration-300"
            >
              Sign In Using Google
            </button>
          </form>
        </div>
        <div className="flex justify-between items-center px-4 pt-8 pb-[2.5em] text-sm">
          <p className="text-gray-600">already have an account?</p>
          <a
            href="/signin"
            className="font-semibold text-blue-saphire rounded-md px-5 py-3 hover:bg-tea-green duration-150"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
