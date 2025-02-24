import { ActionFunctionArgs } from "@vercel/remix";

export const action = async ({ request }: ActionFunctionArgs) => {
    console.log('action triggered!')
    return new Response('Hello, world!', {
        headers: {
            'content-type': 'text/plain',
        },
    });
}
