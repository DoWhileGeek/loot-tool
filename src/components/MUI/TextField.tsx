import { useFormContext, RegisterOptions } from "react-hook-form";
import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from "@mui/material";

// Define the props for your TextField component
interface TextFieldProps extends Omit<MUITextFieldProps, "name"> {
  label: string;
  name: string;
  registerOptions?: RegisterOptions;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  registerOptions,
  ...rest
}) => {
  const formMethods = useFormContext();
  const { register, watch } = formMethods;

  // Watch the value of the field to handle the shrink prop correctly
  const fieldValue = watch(name);

  return (
    <MUITextField
      label={label}
      {...rest}
      InputLabelProps={{
        shrink: fieldValue !== undefined && fieldValue !== "",
      }}
      {...register(name, registerOptions)}
    />
  );
};

export default TextField;
