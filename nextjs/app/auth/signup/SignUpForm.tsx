"use client";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import RegisterUser from "@/utils/RegisterUser";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback((data: Record<string, string>) => {
    console.log(data);
    RegisterUser(data);
  }, []);

  return (
    <div
      className="py-5 lg:w-[50%] mb-14 md:w-[60%] px-6 w-full border-[#306E88]
        flex flex-col gap-5 items-center justify-center"
      style={{ borderWidth: "4px" }}
    >
      <h4 className="text-neutral-800 text-xl font-semibold uppercase">
        Create an account
      </h4>
      <div className="w-full">
        <form
          className="flex flex-col gap-5 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <label className="text-[#306E88] text-lg font-semibold">
              Full name
            </label>
            <input
              className="w-full py-2 px-3  border-b-neutral-200 border-b-[2px] outline-none bg-transparent text-neutral-700"
              type="text"
              placeholder="Full name"
              {...register("fullname", {
                required: "This field is required",
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p>Full name is required.</p>
            )}
          </div>
          <div className="">
            <label className="text-[#306E88] text-lg font-semibold">
              Email
            </label>
            <input
              className="w-full py-2 px-3  border-b-neutral-200 border-b-[2px] outline-none bg-transparent text-neutral-700"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "This field is required",
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p>Email is required.</p>
            )}
          </div>
          <div className="">
            <label className="text-[#306E88] text-lg font-semibold">
              Date of birth
            </label>
            <input
              className="w-full py-2 px-3  border-b-neutral-200 border-b-[2px] outline-none bg-transparent text-neutral-700"
              type="date"
              placeholder="Date of birth"
              {...register("date of birth", {
                required: "This field is required",
              })}
            />
            {errors.date && errors.date.type === "required" && (
              <p>Date of birth is required.</p>
            )}
          </div>
          <div className="">
            <label className="text-[#306E88] text-lg font-semibold">
              Password
            </label>
            <input
              className="w-full py-2 px-3 border-b-neutral-200 border-b-[2px] outline-none bg-transparent text-neutral-700"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "This field is required",
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p>Password is required.</p>
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              className="text-neutral-100 duration-700 transition hover:border-purple-700 
              font-semibold border-[2px] border-neutral-100 py-2 px-4"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
