const createConnection = require("../../../../utils/dbConnection");
const User = require("../../../../models/user");

export async function GET(request, { params }) {
  await createConnection();
  const user = await User.findOne({ email: params.email });
  return Response.json(user);
}

export async function POST(request, { params }) {
  await createConnection();
  const body = await request.json();
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: params.email,
    dob: body.dob,
    accountType: body.accountType,
  });
  return Response.json(result);
}

export async function PUT(request, { params }) {
  await createConnection();
  const body = await request.json();
  const result = await User.updateOne(
    { email: params.email },
    {
      firstName: body.firstName,
      lastName: body.lastName,
      email: params.email,
      dob: body.dob,
      accountType: body.accountType,
    }
  );
  return Response.json(result);
}

export async function DELETE(request, { params }) {
  await createConnection();
  const user = await User.deleteOne({ email: params.email });
  return Response.json(user);
}
