import { users } from '../route';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return new Response('User not found', { status: 404 });
    }
    return Response.json(user);
}
