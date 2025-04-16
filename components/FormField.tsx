import { Controller, Control, FieldValues, Path } from "react-hook-form";

import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="label text-white">{label}</FormLabel>
          <FormControl>
  <div className="p-[1px] rounded-md bg-gradient-to-r from-blue-500 to-purple-600">
    <Input
      className="w-full h-10 px-4 py-2 text-white bg-black rounded-md focus:outline-none"
      type={type}
      placeholder={placeholder}
      {...field}
    />
  </div>
</FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormField;
