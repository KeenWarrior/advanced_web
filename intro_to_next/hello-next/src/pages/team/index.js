import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function Page({ last_updated }) {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data");
      const response = await fetch("http://localhost:8000/api/courses");
      const data = await response.json();
      setCourses(data);
    }

    fetchData();

  }, []);

  return <>
    <Header />

    {
      courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      ) 
    }

    <p>Last updated: {last_updated}</p>
  </>;
}

export async function getStaticProps() {
  console.log("Within getStaticProps");
    return {
      props: {
            last_updated: new Date().toISOString()
      },
      revalidate: 10,
    };
}
