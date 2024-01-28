import {reactive} from 'vue'


export const authentificationToken = reactive({
    JWT: "",
    isDefine() {
        return authentificationToken.JWT !== "";
    },
    connexion(login: string, motDePasse: string): void {
        fetch("https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: login, password: motDePasse}),
        })
        //     .then(
        //     reponsehttp => {
        //         console.log(reponsehttp.json());
        //         console.log(reponsehttp);
        //
        //         if (reponsehttp.status !== 201) {
        //             echec();
        //         } else {
        //             reponsehttp.json().then(reponseJSON => {
        //                 authentificationToken.JWT = reponseJSON["token"];
        //             })
        //         }
        //     }
        // )
            .then(reponsehttp => {
                reponsehttp.json().then(reponseJson => {
                    if(reponsehttp.status == 200) {
                        authentificationToken.JWT = reponseJson["token"];
                        alert("connecté !");
                    }
                    else alert(reponseJson["message"]);
                })
            })
    }
});

