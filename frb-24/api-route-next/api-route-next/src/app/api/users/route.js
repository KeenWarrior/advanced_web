import User from "@/models/user.model";

export async function GET(request) {
    return Response.json(User.find());
}