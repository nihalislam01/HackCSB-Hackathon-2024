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
];

const pageTitle = "Login";

function Login() {

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    });

    const onChangeHandler = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };

    const onFormSubmit = e => {
        e.preventDefault();
        let hasError = !Object.values(formValues).every(value => value.trim().length !== 0);

        if (hasError) {
            toast.error("Please fill out all the details");
            return;
        }
    }

    return (
        <>
            <CommonHelmet title={pageTitle}/>

            <Toaster />

            <div className={`w-50`}>
                <div>
                    <h4 className={`text-center`}>Log In</h4>
                </div>

                <form className={`d-flex flex-column`} onSubmit={onFormSubmit} method="POST">

                    {userInputs.map(e => (
                        <FormInput key={e.id} onChange={onChangeHandler} {...e}/>
                    ))}

                    <button type="submit" className="btn btn-primary mt-2">Sign In</button>
                </form>

                <div className={`d-flex justify-content-center mt-4`}>
                    <p>Don't have an account? <Link to={`/registration`} className={`fw-bold`}>Sign Up</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login;