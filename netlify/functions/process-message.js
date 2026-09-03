export default async (req) => {
  const { content } = JSON.parse(req.body)
  
  return new Response(
    JSON.stringify({
      success: true,
      message: `ROSE: You said "${content}". I'm listening!`
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
