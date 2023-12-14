import React from "react";

const App = () => {
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
  const heading = "Our Courses";
  return (
    <div className="p-10 m-10">
      <h1 className="text-5xl font-serif font-bold text-blue-700 mb-5">
        {heading}
      </h1>
      <ul>
        {courses.filter(el=> el.studentCount>0).map((course) => (
          <li
            className={`${
              course.studentCount === 0 ? "bg-red-200" : "bg-gray-200"
            } mb-3 p-2 border-s-4 border-neutral-400`}
            key={course.id}
          >
            {`${course.title} ${course.studentCount}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
