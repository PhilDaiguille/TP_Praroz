document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, email, password;
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

        if (email && password) {
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