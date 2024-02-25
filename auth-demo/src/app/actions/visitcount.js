import { cookies } from 'next/headers'

export default function visitCount() {
    const count = cookies().get('count').value || 0
    cookies().set('count', count + 1)
}