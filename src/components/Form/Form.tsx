import "./Form.scss";

import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Checkbox } from "./Checkbox";
import { Input } from "./Input";

interface FormValues {
  name: string;
  phone: number;
  email: string;
  comment: string;
}

export const Form = ({ classModificator }: { classModificator?: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    watch,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const resetForm = () => {
    reset();
  };

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          comment: data.comment,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        resetForm();
        // dispatch(USE_BUS.CLOSE_FORM_MODAL);
        // dispatch(USE_BUS.SHOW_SUCCESS_MODAL);
      })
      .catch(() => {
        // dispatch(USE_BUS.SHOW_ERROR_MODAL);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formData = watch();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("form", classModificator)}
    >
      <ul className="form__input-list">
        <li className="form__input-item">
          <Input
            label="Name"
            {...register("name", { required: "Required field" })}
            type="text"
            activePlaceholder="John Doe"
          />
          {errors?.name && (
            <span className="error-message">{errors.name?.message}</span>
          )}
        </li>
        <li className="form__input-item">
          <Input
            label="Email or phone"
            {...register("email", { required: "Required field" })}
            type="text"
            activePlaceholder="johndoe@gmail.com"
          />
          {errors?.email && (
            <span className="error-message">{errors.email?.message}</span>
          )}
        </li>
        <li className="form__input-item">
          <Input
            label="Tell us about your project"
            {...register("comment", { required: "Required field" })}
            type="text"
            activePlaceholder=""
          />
          {errors?.comment && (
            <span className="error-message">{errors.comment?.message}</span>
          )}
        </li>
      </ul>
      <div className="form__checkbox">
        <Checkbox />
      </div>
      <button className="form__btn" type="submit">
        Send request
      </button>
    </form>
  );
};
