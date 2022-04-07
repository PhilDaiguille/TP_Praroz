document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, email,warning, password;
    let exprmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    warning = document.querySelector(".form p");
    email = document.getElementsByTagName("input")[2].value;
    password = document.getElementsByTagName("input")[3].value;
    btn = document.getElementsByTagName("input")[4];

    btn.addEventListener("click", e => {
        e.preventDefault();
        Connexion();
    });

    let Connexion = () => {

        email = document.getElementsByTagName("input")[2].value;
        password = document.getElementsByTagName("input")[3].value;
        btn = document.getElementsByTagName("input")[4];

        if (email.match(exprmail) == "philippe.delente@gmail.com" && password == "azerty") {
            warning.classList.add("success");
            warning.classList.remove("error");
            warning.innerText = "Connexion réussie";
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", email);
			localStorage.setItem("mdp", password);
            sessionStorage.setItem("mdp", password);
        }
        else {
            warning.classList.add("error");
            warning.innerText = "Mail ou mot de passe incorrecte";
            warning.classList.remove("success");
            console.log("Pas bon");
        }
    };
});