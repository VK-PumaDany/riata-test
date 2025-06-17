export async function GET(_request: Request) {
  console.log('Hola mundo');

  return Response.json(
    {
      data: {
        name: "Daniel",
      },
    },
    {
      status: 200,
    }
  );
}
