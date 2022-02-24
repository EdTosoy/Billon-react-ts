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
}

export const FormControl = (props: FormControlProps) => {
  const { name, children, defaultValue, isFieldArrayField = false } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  let error = errors?.[name];

  if (isFieldArrayField) {
    const fieldKeys = name.split(".");
    if (fieldKeys.length > 2) {
      error = errors[fieldKeys[0]]?.[fieldKeys[1]]?.[fieldKeys[2]];
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ onChange, onBlur, value, ...props }: any) => {
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
