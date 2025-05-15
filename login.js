
let gottenUsers = JSON.parse(localStorage.getItem('users')) || [];
console.log(gottenUsers);

const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () {} // Callback after click
    }).showToast();
};

const signIn = () => {
    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const sub = document.getElementById('sub');

    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();

    if (email === '' || password === '') {
        sub.innerHTML = '...loading';
        toast('Haba now, fill in the inputs joor😠👿', '#f00', '#fff');
        setTimeout(() => {
            sub.innerHTML = 'Log In';
        }, 1000);
        return;
    }

    sub.innerHTML = '...loading';

    const found = gottenUsers.find(user => user.mail === email && user.pass === password);
    console.log(found);

    if (!found) {
        toast('User not found', '#f01400', '#fff');
        setTimeout(() => {
            sub.innerHTML = 'Log In';
        }, 1000);
    } else {
        toast('Sign in successful😁', '#006400', '#fff');
        localStorage.setItem('person', JSON.stringify(found)); // Store the user in localStorage
        setTimeout(() => {
            window.location.href = 'Dashbord.html';
        }, 2000);
    }

    // Clear input fields
    emailEl.value = '';
    passwordEl.value = '';
};


// const signIn = () => {
//     const emailInput = document.querySelectorAll("input")[0];
//     const passwordInput = document.querySelectorAll("input")[1];
//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^.{6,}$/;

//     if (!email || !password) {
//         toast("Please fill in both fields ", "#f00", "#fff");
//         return;
//     }

//     if (!emailRegex.test(email)) {
//         toast("Invalid email format ", "#f00", "#fff");
//         return;
//     }

//     if (!passwordRegex.test(password)) {
//         toast("Password must be at least 6 characters", "#f00", "#fff");
//         return;
//     }

//     const users = JSON.parse(localStorage.getItem("temuUsers")) || [];

//     const userFound = users.find(user => user.mail === email && user.pass === password);

//     if (userFound) {
//         toast("Login successful", "#008000", "#fff");
//         setTimeout(() => {
//             window.location.href = "Dashbord.html";
//         }, 1000);
//     } else {
//         toast("No user found or wrong credentials", "#f00", "#fff");
//     }
// };
