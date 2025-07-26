import { GoogleLogin } from 'react-google-login';

const clientId = "161580744000-sb0dd3m4goofvd8hvh2kkhkv8c526104.apps.googleusercontent.com"

function Login() {

    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! Res: ", res);
    }
    
    return(
        <div id="signInButton">
            <GoogleLogin
                clientId = {clientId}
                buttonText = "Login"
                onSuccess = {onSuccess}
                onFailure = {onFailure}
                cookiePolicy = {'single_host_origin'}
                isSignedIn = {true}
            />
        </div>
    )
}

export default Login;