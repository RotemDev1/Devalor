import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { courseService } from "../../service/courseService";
import { useHistory } from "react-router";


export const CourseForm = (props) => {
    const history = useHistory();
    const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
    const [language, setLanguage] = useState("");
    const [mentor, setMentor] = useState("");

    const handleLanguage = (event) => {
        const value = event.target.value;
        setLanguage(value);
    };
    const handleMentor = (event) => {
        const value = event.target.value;
        setMentor(value);
    };



    const publishCourse = async (event) => {
        console.log(event);

        const course = {
            userId: loggedInUser._id,
            language: language,
            mentor: mentor,
            // price: price,
            // language: language,

        }
        console.log(course);

        await courseService.add(course);
        history.push(`/courses`)

    };
    return (
        <div className="addArticle">
            <div className="addArticleWrapper">
                <div className="topEditor">
                    <form action="" className="topArticleForm">
                        {/* <img src={loggedInUser.profilePicture} alt="" /> */}
                        <TextField
                            id="standard-read-only-input"
                            label="Author"
                            defaultValue={`${loggedInUser.username}`}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </form>
                    <form action="" className="subjectArticle">
                        <TextField
                            fullWidth
                            id="standard-read-only-input LangugeInput"
                            label="language"
                            value={language}
                            onChange={handleLanguage}
                        />
                    </form>
                    <form action="" className="subjectArticle">
                        <TextField
                            fullWidth
                            id="standard-read-only-input MentorInput"
                            label="mentor"
                            value={mentor}
                            onChange={handleMentor}
                        />
                    </form>
                </div>

                <button
                    className="btn-publise"
                    onClick={() => {
                        publishCourse();
                    }}
                >
                    Publise
                </button>
            </div>
        </div>
    );
};

{
    /* <FormControl fullWidth sx={{ m: 1 }}>
  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
  <OutlinedInput
    id="outlined-adornment-amount"
    value={values.amount}
    onChange={handleChange('amount')}
    startAdornment={<InputAdornment position="start">$</InputAdornment>}
    label="Amount"
  />
  </FormControl> */
}
export default CourseForm;
