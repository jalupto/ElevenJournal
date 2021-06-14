/* *************************
 *** USER SIGNUP ***
 ************************** */
function userSignUp() { 
    // console.log('userSignUp Function Called')

    let userEmail = document.getElementById("emailSignup").value;
    let userPass = document.getElementById("pwdSignup").value;

    let newUserData = {
        user: {
            email: userEmail,
            password: userPass
        }
    };

    console.log(`newUserData --> ${newUserData.user.email} ${newUserData.user.password}`);

    fetch(`http://localhost:3000/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let token = data.sessionToken;
            localStorage.setItem('SessionToken', token);
            tokenChecker();
        })
        .catch(err => {
            console.log(err)
        })
};


/* *************************
 *** USER LOGIN ***
 ************************** */
function userLogin() { 
    // console.log('userLogin Function Called')

    let userEmail = document.getElementById('emailLogin').value;
    let userPass = document.getElementById('pwdLogin').value;
    console.log(userEmail, userPass)

    let userData = {
        user: {
            email: userEmail,
            password: userPass
        }
    }
    console.log(userData)

    fetch(`http://localhost:3000/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let token = data.sessionToken;
            localStorage.setItem('SessionToken', token);
            tokenChecker();
        })
        .catch(err => {
            console.error(err)
        })
}


/* *************************
 *** USER LOGOUT ***
 ************************** */
function userLogout() { 
    // console.log('userLogout Function Called')

    localStorage.setItem('SessionToken', undefined);
    console.log(`SessionToken --> ${localStorage.SessionToken}`);
    tokenChecker();
}


/* *************************
 *** TOKEN CHECKER FUNCTION ***
 ************************** */
function tokenChecker() { 
    console.log('tokenChecker Function Called')
}
tokenChecker()