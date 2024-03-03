'use server';
import {cookies} from 'next/headers'
import jwt from 'jsonwebtoken';

export default async function signUpAction(formData) {
  
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    username,
    email,
    password
  }

  const token = jwt.sign(payload, "this_is_secret", {
    expiresIn: "1d"
  });

  cookies().set("token", token);
}
