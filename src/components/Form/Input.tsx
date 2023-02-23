import clsx from "clsx";
import { forwardRef, InputHTMLAttributes, useId, useState } from "react";
import useBus from "use-bus";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  activePlaceholder: string;
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ activePlaceholder, label, ...props }, ref) => {
    const [isActive, setActive] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const id = useId();

    useBus("RESET_FIELD", () => setValue(null));

    return (
      <>
        <label
          htmlFor={`label-${id}`}
          className={clsx(
            "form__input-label",
            (isActive || value) && "form__input-label--focused"
          )}
        >
          {label}
        </label>
        <input
          {...props}
          placeholder={isActive ? activePlaceholder : props.placeholder}
          id={`label-${id}`}
          ref={ref}
          onFocus={(e) => {
            setActive(true);
            if (props.onFocus) props.onFocus(e);
          }}
          onBlur={(e) => {
            setActive(false);
            if (props.onBlur) props.onBlur(e);
          }}
          onInput={(e) => {
            e.preventDefault();

            e.currentTarget.value !== null
              ? setValue(e.currentTarget.value)
              : setValue(null);
          }}
        />
      </>
    );
  }
);

Input.displayName = "Input";
