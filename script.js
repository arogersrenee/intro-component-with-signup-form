(function validateForm() {
    const form = document.querySelector("form");
    const firstname = document.querySelector("#firstname");
    const firstnameIcon = document.querySelector("#firstname-icon");
    const firstnameMsg = document.querySelector("#firstname-msg");

    const lastname = document.querySelector("#lastname");
    const lastnameIcon = document.querySelector("#lastname-icon");
    const lastnameMsg = document.querySelector("#lastname-msg");

    const email = document.querySelector("#email");
    const emailIcon = document.querySelector("#email-icon");
    const emailMsg = document.querySelector("#email-msg");

    const password = document.querySelector("#password");
    const passwordIcon = document.querySelector("#password-icon");
    const passwordMsg = document.querySelector("#password-msg");


    const emailRegex =
    new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);

    const pwRegex = 
        new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkFormInput();
        })

    function checkFormInput() {

        checkFirstname();
        checkLastname();
        checkEmail();
        checkPassword();

        if (checkFirstname() && checkLastname() && checkEmail() && checkPassword()){
            return true;
        } return false;

        function checkFirstname() {
            if (firstname.value.trim() == ""){
                firstnameIcon.classList.remove('no-error');
                firstnameMsg.classList.remove('no-error');
                firstnameMsg.innerHTML = "First Name cannot be empty";
                firstname.style.border = "2px solid var(--clr-coral)"
                return false;
            } else {
                firstnameIcon.classList.add('no-error');
                firstnameMsg.classList.add('no-error');
                firstnameMsg.innerHTML = "";
                firstname.style.border = "1px solid var(--clr-purple)";
                return true;
            }
        }

            function checkLastname() {
            if (lastname.value.trim() == ""){
                lastnameIcon.classList.remove('no-error');
                lastnameMsg.classList.remove('no-error');
                lastnameMsg.innerHTML = "Last Name cannot be empty";
                lastname.style.border = "2px solid var(--clr-coral)"
                return false;
            } else {
                lastnameIcon.classList.add('no-error');
                lastnameMsg.classList.add('no-error');
                lastnameMsg.innerHTML = "";
                lastname.style.border = "1px solid var(--clr-purple)";
                return true;
            }
        }

        function checkEmail() {
            if (!emailRegex.test(email.value.trim())){
                emailIcon.classList.remove('no-error');
                emailMsg.classList.remove('no-error');
                emailMsg.innerHTML = "Looks like this is not a valid email";
                email.style.border = "2px solid var(--clr-coral)";
                email.style.color = "var(--clr-coral)";
                return false;
            } else {
                emailIcon.classList.add('no-error');
                emailMsg.classList.add('no-error');
                emailMsg.innerHTML = "";
                email.style.border = "1px solid var(--clr-purple)";
                email.style.color = "var(--clr-black)";
                return true;
            }
        }

        function checkPassword() {
            if (!pwRegex.test(password.value.trim())){
                passwordIcon.classList.remove('no-error');
                passwordMsg.classList.remove('no-error');
                passwordMsg.innerHTML = "Please enter a valid passord";
                password.style.border = "2px solid var(--clr-coral)"
                return false;
            } else {
                passwordIcon.classList.add('no-error');
                passwordMsg.classList.add('no-error');
                passwordMsg.innerHTML = "";
                password.style.border = "1px solid var(--clr-purple)"
                password.style.color = "var(--clr-black)"
                return true;
            }
        }
    }
})()

