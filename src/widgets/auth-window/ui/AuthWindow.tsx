import type { AuthArg, SignUpResponce } from "@/features/auth/types/auth-types";
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
    SignUpResponce,
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
    <form onSubmit={handleSubmit(Submit)}>
      <h1>{title}</h1>
      {inputs.map((item) => (
        <input
          key={item.id}
          maxLength={item.maxLength && item.maxLength}
          minLength={item.minLength && item.minLength}
          placeholder={item.placeholder}
          type={item.type}
          {...register(item.name)}
        />
      ))}
      <button type="submit">{buttonText}</button>
      {undertext}
      {policy}
    </form>
  );
};

export { AuthWindow };
