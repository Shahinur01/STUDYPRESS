import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import CourseDetail from "../CourseDetail/CourseDetail";
import { Link } from "react-router-dom";

import { UserContext } from "../../../App";
import DonateUs from "../../DonateUs/DonateUs";


const Courses = ({ date }) => {
  const [courseData, setCourseData] = useState([]);
console.log(date);
  useEffect(() => {
    fetch("https://obscure-escarpment-54463.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourseData(data);
      });
  }, [date]);

  return (
    <section>
      <div className="services-container mt-5 mb-5">
        <Fade cascade>
          <div className="text-center">
            <h1>
              {" "}
              Available course on{" "}
              <span className="text-primary">{date}</span>{" "}
            </h1>
          </div>

          <div className="d-flex justify-content-center">
            <div className="w-75 row pt-4">
              {courseData.map((course) => (
                <CourseDetail key={course._id} date={date} course={course}>
                  {" "}
                </CourseDetail>
              ))}
            </div>
          </div>
        </Fade>
      </div>
      <Link to="/home">
        {" "}
        <button className="mx-5 btn btn-outline-danger">
          {" "}
          Back to Home{" "}
        </button>{" "}
      </Link>
      <br />
      <br />
    </section>
  );
};

export default Courses;
