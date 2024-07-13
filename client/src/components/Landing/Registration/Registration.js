import {Link} from "react-router-dom";
import FormInput from "../../../common/components/FormInput/FormInput";
import {useState} from "react";
import CommonHelmet from "../../../common/components/Head/CommonHelmet";
import { toast, Toaster } from "react-hot-toast";

const userInputs = [
    {
        id: "usernameInput",
        name: "username",
        type: "text",
        placeholder: "Username"
    },
    {
        id: "passwordInput",
        name: "password",
        type: "password",
        placeholder: "Password"
    },
    {
        id: "confirmPasswordInput",
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password"
    },
];

const pageTitle = "Registration";

function Registration() {

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const onChangeHandler = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };

    const onFormSubmit = e => {
        e.preventDefault();
        let hasError = !Object.values(formValues).every(value => value.trim().length !== 0);
        let match = (formValues.confirmPassword === formValues.password);

        if (hasError) {
            toast.error("Please fill out all the details");
            return;
        }

        if (!match) {
            toast.error("Password did not match");
            return;
        }
    }

    return (
        <>
            <CommonHelmet title={pageTitle}/>

            <Toaster />

            <div className={`w-50`}>
                <div>
                    <h4 className={`text-center`}>Sign Up</h4>
                </div>

                <form className={`d-flex flex-column`} onSubmit={onFormSubmit} method="POST">

                    {userInputs.map(e => (
                        <FormInput key={e.id} onChange={onChangeHandler} {...e}/>
                    ))}

                    <button type="submit" className="btn btn-success mt-2">Sign Un</button>
                </form>

                <div className={`d-flex justify-content-center mt-4`}>
                    <p>Already signed up? <Link to={`/`} className={`fw-bold`}>Sign In</Link></p>
                </div>
            </div>
        </>
    )
}

export default Registration;