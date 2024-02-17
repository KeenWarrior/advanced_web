// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const username = req.query.username;

  res.status(200).json({ username });
}
