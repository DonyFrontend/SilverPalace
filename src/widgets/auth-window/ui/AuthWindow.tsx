import type { AuthArg, AuthResponce } from "@/features/auth/types/auth-types";
import { useAppDispatch } from "@/shared/hooks/useReduxHooks";
import type { AsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";

export type AuthInputsData = {
  placeholder: string;
  type: string;
  maxLength?: number;
  minLength?: number;
  id: string;
  name: "email" | "password" | "name";
};

export type AuthWindowProps = {
  title: string;
  inputs: AuthInputsData[];
  undertext: React.ReactNode;
  buttonText: string;
  policy: React.ReactNode;
  func: AsyncThunk<
    AuthResponce,
    AuthArg,
    {
      rejectValue: string;
    }
  >;
};

const AuthWindow: React.FC<{ data: AuthWindowProps }> = ({
  data: { buttonText, inputs, title, undertext, policy, func },
}) => {
  const { register, handleSubmit } = useForm<AuthArg>();
  const dispatch = useAppDispatch();
  const Submit = (data: AuthArg) => {
    console.log(data);
    dispatch(func(data));
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <form className="flex flex-col mt-10 gap-y-5 border-[1px] p-10 px-14 rounded-xl" onSubmit={handleSubmit(Submit)}>
        <h1 className="text-4xl pb-8 text-center">{title}</h1>
        {inputs.map((item) => (
          <input
            className="py-5 px-5 rounded-xl border-[1px]"
            key={item.id}
            maxLength={item.maxLength && item.maxLength}
            minLength={item.minLength && item.minLength}
            placeholder={item.placeholder}
            type={item.type}
            {...register(item.name)}
          />
        ))}
        <div className="text-center text-[18px]">
        {undertext}
        </div>
        <div className="mt-2.5 text-[18px]">
        {policy}
        </div>
        <button className="cursor-pointer border-[1px] rounded-xl py-4 text-xl text-center border-none bg-blue-600 hover:bg-blue-700" type="submit">{buttonText}</button>
      </form>
    </div>
  );
};

export { AuthWindow };
