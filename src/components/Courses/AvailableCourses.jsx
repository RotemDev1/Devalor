import React, { useState } from "react";
import CourseItem from "./CourseItem";
import Card from "../UI/Card";
import classes from "./AvailableCourses.module.css";
import Courses from "../../data/dummyCourses";

const CoursesList = Courses;

const AvailableCourses = (props) => {

    const [courses, setCourses] = useState(CoursesList);

    const addCourseHandler = (course) => {
        setCourses((prevCourses) => {
            return [course, ...prevCourses];
        });
    };
    const coursesList = courses.map(course =>
        <CourseItem
            key={course._id}
            id={course._id}
            mentor={course.mentor}
            photo={course.photo}
            category={course.category}
            subjects={course.subjects}
            price={course.price}

        />

    );


    return (
        <section className={classes.courses}>
            <Card>
                <ul>

                    {coursesList}

                </ul>
            </Card>
        </section>
    );
}

export default AvailableCourses;