import react from "react";
import AvailableCourses from "./AvailableCourses";
import { AddCourse } from "./addCourses/AddCourse";



export const Courses = ({ props }) => {

    return (
        <div className="coursesContainer">
            <div className="addCourse">
                <AddCourse />
            </div>

            <AvailableCourses />
        </div>
    );
}
