import { forwardRef, HtmlHTMLAttributes, useId } from "react";
import "./Form.scss";

type CheckboxProps = HtmlHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const id = useId();

    return (
      <>
        <input
          className='checkbox'
          type="checkbox"
          {...props}
          ref={ref}
          id={`accept-${id}`}
        />
        <label htmlFor={`accept-${id}`}>
          I agree to the processing of my personal data and accept the terms of
          privacy policy.
        </label>
      </>
    );
  }
);

Checkbox.displayName = "Checkbox";
