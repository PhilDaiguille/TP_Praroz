document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let warning, email, password, btn;
    let exprmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    const mail = "philippe.delente@gmail.com";
    const mdp = "azerty";

    warning = document.querySelector(".form p");
    email = document.getElementsByTagName("input")[2].value;
    password = document.getElementsByTagName("input")[3].value;
    btn = document.getElementsByTagName("input")[4];

    let Connexion = {  
        Login(){
            warning = document.querySelector(".form p");
            email = document.getElementsByTagName("input")[2].value;
            password = document.getElementsByTagName("input")[3].value;
            btn = document.getElementsByTagName("input")[4];
            if (email.match(mail && exprmail) && password == mdp) {
                warning.classList.add("success")
                warning.classList.remove("error")
                warning.innerText = "Connexion réussie"
                localStorage.setItem("user", email)
                sessionStorage.setItem("user", email)
                localStorage.setItem("mdp", password)
                sessionStorage.setItem("mdp", password)
            }
            else {
                warning.classList.add("error")
                warning.innerText = "Mail ou mot de passe incorrecte"
                warning.classList.remove("success")
                console.log("Pas bon")
            }
        },
    };
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        Connexion.Login();
    });
});