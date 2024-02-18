// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
    const courses = [
      {
        id: 1,
        name: "Course 1",
      },
      {
        id: 2,
        name: "Course 2",
      },
    ];
  
    res.status(200).json(courses );
  }
  