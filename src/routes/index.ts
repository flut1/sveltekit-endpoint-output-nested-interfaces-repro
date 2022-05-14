import type { RequestHandler } from "@sveltejs/kit";

interface GetOutput {
    item: { message: string }
}

// No TS error
export const get: RequestHandler<any, GetOutput> = async () => {
    return {
        status: 200,
        body: {
            item: { message: 'hello' },
        },
    };
};

interface Item {
    message: string;
}

interface PostOutput {
    item: Item;
}

// TS error: Type '{ message: string; }' is not assignable to type 'never'.ts(2322)
export const post: RequestHandler<any, PostOutput> = async () => {
    return {
        status: 200,
        body: {
            item: { message: 'hello' },
        },
    };
};