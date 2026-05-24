"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
const SignInPage = () => {
    const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
    email: userData.email,
    password: userData.password,
    rememberMe: true,
    callbackURL: "/",
});


    if(!error){
        alert('Sign In successfully');
    }

    };
const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
  return (
    <div className="flex min-h-screen justify-center items-center">
        
       <Form className="flex w-96 flex-col gap-4 border rounded-2xl px-10 py-20" onSubmit={onSubmit}>
         <h1 className="text-2xl font-bold text-gray-600">Sign In</h1>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="password"
        type="password"
        
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      <div className="flex items-center gap-1">
      <span className="text-sm">Havn't an account?</span>
      <Link  className="text-blue-500 text-sm hover:underline" href='/signup' >sign up</Link>
      </div>
      <Button className="w-full" onClick={signIn} > <FaGoogle /> Sign in with Google</Button>
    </Form>
    </div>
  )
}

export default SignInPage
