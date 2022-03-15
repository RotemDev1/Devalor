import classes from "./CourseItem.module.css";
// import Card from "../UI/Card";
import { NavLink } from "react-router-dom";
const CourseItem = (props) => {
    return (
        <li className={classes.movie} >
            <div >
                <h3>{props.mentor}</h3>
                <NavLink className='btn-header' to={`/courses/${props.id}`}>
                    <img className={classes.img} src={props.photo} alt="" />
                </NavLink>
                <div className={classes.description}>{props.subjects}</div>
                <div className={classes.screeningTimes}>{props.price} </div>
            </div>
            <div>
            </div>
        </li >

    );
}



export default CourseItem;