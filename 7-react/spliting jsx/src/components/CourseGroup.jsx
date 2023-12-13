import React from "react";
import Course from "./Course";

const CourseGroup = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Foundation",
      studentCount: 0,
    },
    {
      id: 2,
      title: "Special Web Design",
      studentCount: 5,
    },
    {
      id: 3,
      title: "Web App Development",
      studentCount: 9,
    },
    {
      id: 4,
      title: "Basic UI Design",
      studentCount: 0,
    },
    {
      id: 5,
      title: "Premium UI Design",
      studentCount: 3,
    },
  ];
  return (
    <div>
      {courses.map(({id,title,studentCount}) => (
        <Course
          title={title}
          count={studentCount}
          id={id}
          key={id}
        />
      ))}
    </div>
  );
};

export default CourseGroup;
