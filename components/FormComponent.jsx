// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// const formSchema = z.object({
//   name: z.string().min(3, { message: "Name is required" }),
//   email: z.string().email(),
//   message: z.string().min(3, { message: "Message is required" }),
// });

// const FormComponent = () => {
//   const form =
//     useForm <
//     z.infer <
//     typeof formSchema >>
//       {
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//           name: "",
//           email: "",
//           message: "",
//         },
//       };
//   function onSubmit(values) {
//     console.log(values);
//   }

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//   );
// };

// export default FormComponent;
