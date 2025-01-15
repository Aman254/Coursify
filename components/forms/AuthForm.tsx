"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {
    // TODO: Authenticate User.
  };

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6 mt-10"
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel>
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className=" w-full px-4 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-200 ease-in-out border-bg-faded-blue"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          disabled={form.formState.isSubmitting}
          className="w-full primary-background text-white hover:primary-background hover:border transition-all hover:text-white"
        >
          {form.formState.isSubmitting
            ? buttonText === "Sign In"
              ? "Signin In..."
              : "Signing Up..."
            : buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
