import dbConnect from '../../../lib/dbConfig.js';
import User from '../../../models/user.models.js';

export async function GET() {
  await dbConnect();
  try {
    const users = await User.find({});
    return Response.json({ success: true, data: users });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const newUser = await User.create(body);
    return Response.json({ success: true, data: newUser });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}
