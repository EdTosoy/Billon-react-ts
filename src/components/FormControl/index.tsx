import * as React from "react";

import { Controller, useFormContext } from "react-hook-form";

type ControllerRenderProps = {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: any;
};

interface FormControlProps {
  name: string;
  defaultValue?: any;
  children:
    | React.ReactElement
    | ((props: ControllerRenderProps) => JSX.Element);
  isFieldArrayField?: boolean;
  showFieldError?: boolean;
}

export const FormControl = (props: FormControlProps) => {
  const { name, children, defaultValue } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
        formState,
        ...props
      }) => {
        if (React.isValidElement(children))
          return React.cloneElement(children, {
            ...props,
            onChange,
            value,
          });
        return children({ ...props, onChange, onBlur, value });
      }}
    />
  );
};
