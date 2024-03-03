'use server';

import {cookies} from 'next/headers'

export default async function signout() {
  cookies().delete("token");
}
