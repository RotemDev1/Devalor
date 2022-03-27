import react from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AvailableCourses from "./AvailableCourses";
import { AddCourse } from './addCourses/AddCourse';
import { CourseList } from './CourseList';
import { getCourses } from '../../store/actions/courseActions';

export const Courses = ({ props }) => {
    const dispatch = useDispatch();

	const filterCourses = useSelector((state) => state.courseModule.filterCourses);

	useEffect(() => {
		dispatch(getCourses(filterCourses));
	}, []);

	return (
		<div className="coursesContainer">
			<div className="addCourse">
				<AddCourse />
			</div>
			<CourseList/>
		</div>
	);
};
