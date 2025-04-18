import { useForm } from "react-hook-form";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

export const FormSubscribeUser = () => {
  const form = useForm();

  const onSubmit = () => {
    console.log("aqui va ir el formulario");
  };
  return (
    <Form {...form}>
      <form
        action="submit"
        className="max-w-[90%] flex flex-col gap-4 bg-black px-4 py-7 rounded-2xl
                    sm:flex-row sm:px-6
                    md:gap-20
                    lg:px-10
                    xl:w-full xl:px-25"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem
              className="w-full 
                            sm:flex-1 sm:flex sm:flex-row sm:gap-4
                            md:gap-6
                            xl:gap-0
                            2xl:gap-96"
            >
              <FormLabel
                htmlFor="email"
                className="text-white text-4xl font-black mb-4 leading-9 
                            sm:flex-3/2
                            lg:mr-15
                            xl:gap-70"
              >
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </FormLabel>
              <div
                className="flex flex-col gap-4 
                            sm:justify-center sm:w-full"
              >
                <FormControl>
                  <div className="flex items-center rounded-3xl pl-4 bg-white">
                    <TfiEmail className="size-5 text-black/40" />
                    <Input
                      id="email"
                      type="email"
                      className="focus:ring-0! border-0! shadow-none! rounded-none! py-[22px] placeholder:text-black/40 placeholder:text-sm"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
                <Button className="bg-white text-black text-sm border-2 border-transparent rounded-3xl py-5 cursor-pointer transition-all duration-400 hover:bg-black hover:text-white hover:border-white">
                  Subscribe to Newsletter
                </Button>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
