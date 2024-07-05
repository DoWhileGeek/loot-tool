import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function FreeSoloSelect({
  name,
  rules,
  options,
  getOptionLabel,
  ...rest
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={null}
      render={({
        field: { ref, ...field },
        fieldState: { error, invalid },
      }) => {
        return (
          <Autocomplete
            {...field}
            freeSolo
            handleHomeEndKeys
            options={options}
            getOptionLabel={getOptionLabel}
            renderInput={(params) => (
              <TextField
                {...params}
                {...rest}
                inputRef={ref}
                error={invalid}
                helperText={error?.message}
              />
            )}
            onChange={(e, value) => field.onChange(value)}
            onInputChange={(_, data) => {
              if (data) field.onChange(data);
            }}
          />
        );
      }}
    />
  );
}
