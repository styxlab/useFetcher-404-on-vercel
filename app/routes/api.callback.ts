//export const config = { runtime: 'edge' }

export const action = async () => {
    console.log('action triggered!')
    return new Response('Hello, world!', {
        headers: {
            'content-type': 'text/plain',
        },
    });
}
