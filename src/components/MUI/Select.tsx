// Select.tsx
import React from "react";
import {
  Controller,
  Control,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  FormHelperText,
  Divider,
  FormControlProps,
} from "@mui/material";

interface Option {
  value?: string;
  label?: string;
  type: "option" | "divider";
}

interface SelectProps extends FormControlProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  options: Option[];
  defaultValue?: string;
  rules?: RegisterOptions;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  control,
  options,
  defaultValue = "",
  rules = {},
  ...props
}) => {
  return (
    <FormControl fullWidth margin="normal" {...props}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <MUISelect {...field} label={label} error={!!fieldState.error}>
              {options.map((option, index) =>
                option.type === "divider" ? (
                  <Divider key={`divider-${index}`} />
                ) : (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    className={option.className}
                  >
                    {option.label}
                  </MenuItem>
                )
              )}
            </MUISelect>
            {fieldState.error && (
              <FormHelperText error>{fieldState.error.message}</FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default Select;
