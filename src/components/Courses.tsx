import React from "react";

const Courses = () => {
  let courses = [
    "Spanish",
    "Geography",
    "Web Design",
    "React JS",
    "French",
    "Math",
  ];
  return (
    <div className="backgroundContentPage">
      <ul className="stylizedList">
        {courses.map((item) => (
          <li className="stylizedListButtons">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
