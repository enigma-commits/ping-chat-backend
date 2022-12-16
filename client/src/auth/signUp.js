import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function SignUp() {
    const googleAuth = ({ profileObj }) => {
        axios({
            method: "post",
            url: "/auth/google/signup",
            data: {
                googleId: profileObj.googleId,
                email: profileObj.email,
                first_name: profileObj.givenName,
                last_name: profileObj.familyName,
            },
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };
    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            onSuccess={googleAuth}
            onFailure={googleAuth}
            cookiePolicy={"single_host_origin"}
        >
            <span>Sign Up with Google</span>
        </GoogleLogin>
    );
}

export default SignUp;
