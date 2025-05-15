
// const allUsers = []



// const nameRegex = /^[A-Za-z]{2,}$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;

// const register = () => {
//     if (firstName.value === '' || lastName.value === '' || email.value === '' || password.value === '') {
//         // errorMsg.style.display = 'block'
//         toast('Haba now, fill in the inputs joor😠👿', '#f00', '#fff')
//         sub.innerHTML = '...loading'
//         setTimeout(() => {
//             sub.innerHTML = 'Submit'
//         }, 1000)
//     } else {
//         errorMsg.style.display = 'none'

//         const fName = document.getElementById('firstName').value
//         const lName = document.getElementById('lastName').value
//         const mail = document.getElementById('email').value
//         const pass = document.getElementById('password').value



//         if (!fName || !lName || !mail || !pass) {
//             toast('Haba now, fill in the inputs joor😠👿', '#f00', '#fff');
//             sub.innerHTML = '...loading';
//             setTimeout(() => sub.innerHTML = 'Submit', 1000);
//             return;
//         }

//         if (!nameRegex.test(fName) || !nameRegex.test(lName)) {
//             toast('Name must be letters only and at least 2 characters 😑', '#ff6600', '#fff');
//             return;
//         }

//         if (!emailRegex.test(mail)) {
//             toast('Email format is not correct 🤨', '#ff6600', '#fff');
//             return;
//         }

//         if (!passwordRegex.test(pass)) {
//             toast('Password must have 8+ chars, 1 capital, 1 number, 1 special char 😤', '#ff6600', '#fff');
//             return;
//         }
//         const userObj = { fName, lName, mail, pass }
//         console.log(userObj);
//         allUsers.push(userObj)
//         toast('Sign up successful😁', '#006400', '#fff')
//         console.log(allUsers);

//         document.getElementById('firstName').value = ''
//         document.getElementById('lastName').value = ''
//         document.getElementById('email').value = ''
//         document.getElementById('password').value = ''
//     }
// }


const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position,
        stopOnFocus: true,
        style: {
            background,
            color,
        },
        onClick: function () { }
    }).showToast();
}


// Ensure consistent key usage
let allUsers = [];

if (localStorage.getItem('users')) {
    let retrieved = JSON.parse(localStorage.getItem('users'));
    console.log(retrieved);
    allUsers = retrieved;
} else {
    allUsers = [];
}

const register = () => {
    const fNameEl = document.getElementById('firstName');
    const lNameEl = document.getElementById('lastName');
    const emailEl = document.getElementById('email');
    const passEl = document.getElementById('password');
    const sub = document.querySelector('button');

    if (fNameEl.value === '' || lNameEl.value === '' || emailEl.value === '' || passEl.value === '') {
        toast('Haba now, fill in the inputs joor😠👿', '#f00', '#fff');
        sub.innerHTML = '...loading';
        setTimeout(() => {
            sub.innerHTML = 'Submit';
        }, 1000);
    } else {
        sub.innerHTML = '...loading';
        setTimeout(() => {
            sub.innerHTML = 'Submit';
        }, 1500);

        const fName = fNameEl.value.trim();
        const lName = lNameEl.value.trim();
        const mail = emailEl.value.trim();
        const pass = passEl.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[a-zA-Z]{2,}$/;
        const passRegex = /^.{6,}$/;

        if (!emailRegex.test(mail)) {
            toast('Invalid email format', '#FFA500', '#000');
            return;
        }
        if (!nameRegex.test(fName) || !nameRegex.test(lName)) {
            toast('Name must be at least 2 letters and alphabet only', '#FFA500', '#000');
            return;
        }
        if (!passRegex.test(pass)) {
            toast('Password must be at least 6 characters', '#FFA500', '#000');
            return;
        }

        const userObj = { fName, lName, mail, pass };
        let found = allUsers.find(eachUser => eachUser.mail === mail);

        if (found === undefined) {
            allUsers.push(userObj);
            toast('Sign up successful', '#006400', '#fff');

            fNameEl.value = '';
            lNameEl.value = '';
            emailEl.value = '';
            passEl.value = '';

            localStorage.setItem('users', JSON.stringify(allUsers));

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            toast('Account already exists, kindly sign in with your details', '#00f', '#fff');
        }
    }
};

// const register = () => {
//     const fName = document.getElementById('firstName').value;
//     const lName = document.getElementById('lastName').value;
//     const mail = document.getElementById('email').value;
//     const pass = document.getElementById('password').value;
//     const sub = document.querySelector('button');
//     const errorMsg = document.getElementById('errorMsg');

//     const nameRegex = /^[A-Za-z]{2,}$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{8,}$/;
//     const allUsers = JSON.parse(localStorage.getItem('temuUsers')) || [];

//     if (fName === '' || lName === '' || mail === '' || pass === '') {
//         errorMsg.style.display = 'block';
//         toast('Haba now, fill in the inputs joor😠👿', '#f00', '#fff');
//         sub.innerHTML = '...loading';
//         setTimeout(() => {
//             sub.innerHTML = 'Submit';
//         }, 1000);
//     } else {
//         errorMsg.style.display = 'none';
//         sub.innerHTML = '...loading';
//         setTimeout(() => {
//             sub.innerHTML = 'Submit';
//         }, 1500);
//         if (!nameRegex.test(fName) || !nameRegex.test(lName)) {
//             toast('Name must be letters only and at least 2 characters 😑', '#ff6600', '#fff');
//             return;
//         }
//         if (!emailRegex.test(mail)) {
//             toast('Email format is not correct 🤨', '#ff6600', '#fff');
//             return;
//         }
//         if (!passwordRegex.test(pass)) {
//             toast('Password must have 8+ chars, 1 capital, 1 number, 1 special char 😤', '#ff6600', '#fff');
//             return;
//         }
//         const userObj = { fName, lName, mail, pass };
//         console.log(userObj);
//         allUsers.push(userObj);
//         toast('Sign up successful😁', '#006400', '#fff');
//         console.log(allUsers);
//         localStorage.setItem('temuUsers', JSON.stringify(allUsers));


//         document.getElementById('firstName').value = '';
//         document.getElementById('lastName').value = '';
//         document.getElementById('email').value = '';
//         document.getElementById('password').value = '';
//         setTimeout(() => {
//             window.location.href = 'login.html';
//         }, 2000);
//     }
// }