import { forwardRef, HtmlHTMLAttributes, useId } from "react";

type CheckboxProps = HtmlHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const id = useId();

    return (
      <>
        <input
          className="visually-hidden"
          type="checkbox"
          {...props}
          ref={ref}
          id={`accept-${id}`}
        />
        <label htmlFor={`accept-${id}`}>
          I agree to the processing of my personal data and accept the terms of
          privacy policy.
          {/* Я даю свое{" "}
        <button type="button" onClick={() => dispatch("SHOW_POLICY")}>
          согласие
        </button>{" "}
        на обработку моих персональных данных и принимаю условия{" "}
        <button type="button" onClick={() => dispatch("SHOW_PRIVACY")}>
          политики конфиденциальности
        </button>
        . */}
        </label>
      </>
    );
  }
);

Checkbox.displayName = "Checkbox";
