const data = {
    name: '',
    email: '',
    password: '', 
};

const login = document.getElementById('button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameRegex = (/^[A-Za-z]+$/);
const emailRegex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const passwordRegex = (/^[A-Za-z0-9]\w{8,}$/);

login.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(nameRegex.test(nameInput.value) == true && emailRegex.test(emailInput.value) == true && passwordRegex.test(passwordInput.value) == true) {
        data.name = nameInput.value
        data.email = emailInput.value
        data.password = passwordInput.value

        function loading1() {
            window.location.href = "../pages/ladingPagee.html"
        }
        setTimeout(loading1, 1000);

        localStorage.setItem("data", JSON.stringify(data));
    }
    
    else if(passwordRegex.test(passwordInput.value) == false && emailRegex.test(emailInput.value) == false && nameRegex.test(nameInput.value) == false) {
        passwordInput.style.border = "2px solid red";
        emailInput.style.border = "2px solid red";
        nameInput.style.border = "2px solid red";
    }

    else if(nameRegex.test(nameInput.value) == true) {
        passwordInput.style.border = "2px solid red";
        emailInput.style.border = "2px solid red";
    }

    else if(emailRegex.test(emailInput.value) == true) {
        nameInput.style.border = "2px solid red";
        passwordInput.style.border = "2px solid red";
    }

    else if(passwordRegex.test(passwordInput.value) == true) {
        nameInput.style.border = "2px solid red";
        emailInput.style.border = "2px solid red";
    }



    console.log(nameRegex.test(nameInput.value));
    console.log(emailRegex.test(emailInput.value));
    console.log(passwordRegex.test(passwordInput.value));
});

nameInput.addEventListener("click", () => {
    nameInput.style.border = "none";
    emailInput.style.border = "none";
    passwordInput.style.border = "none";
});

emailInput.addEventListener("click", () => {
    emailInput.style.border = "none";
});

passwordInput.addEventListener("click", () => {
    passwordInput.style.border = "none";
});
