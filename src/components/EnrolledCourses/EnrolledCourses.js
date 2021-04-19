import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const EnrolledCourses = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [enrolledCourse, setEnrolledCourse] = useState([]);
  const [delCourse, setDelCourse] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:8000/enrolledCourse/?email=" +
        loggedInUser.email,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnrolledCourse(data);
      });
  }, [enrolledCourse]);

  const deleteEnrollCourse = (id) => {
    fetch(`http://localhost:8000/deleteEnrolledCourse/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setDelCourse(data));
  };

  return (
    <section>
      <table className="">
        <table className="table table-hover table-responsive ">
          <caption>Total Enrolled Course {enrolledCourse.length}</caption>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col" className="text-center">
                {" "}
                Name
              </th>
              <th scope="col" className="text-center">
                Phone
              </th>
              <th scope="col" className="text-center">
                Email
              </th>
              <th scope="col" className="text-center">
                Course Name
              </th>
              <th scope="col" className="text-center">
                Status
              </th>
              <th scope="col" className="text-center">
                Manage Course
              </th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourse.map((enrolledCourse, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{enrolledCourse.name}</td>
                <td>{enrolledCourse.phone}</td>
                <td>{enrolledCourse.email}</td>
                <td>{enrolledCourse.courseName}</td>
                <td>{enrolledCourse.courseStatus}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => deleteEnrollCourse(enrolledCourse._id)}
                    className="btn btn-danger"
                  >
                    {" "}
                    Dismiss Course{" "}
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </table>
    </section>
  );
};

export default EnrolledCourses;
