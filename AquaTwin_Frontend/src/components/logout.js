import { GoogleLogout } from 'react-google-login';

const clientId = "161580744000-sb0dd3m4goofvd8hvh2kkhkv8c526104.apps.googleusercontent.com"

function Logout() {

    const onSuccess = () => {
        console.log("Logout successful!");
    }
    
    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId = {clientId}
                buttonText = "Logout"
                onLogoutSuccess = {onSuccess}
            />
        </div>
    )
}

export default Logout;