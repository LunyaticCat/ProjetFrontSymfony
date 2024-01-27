import { reactive } from 'vue'


export const authentificationToken = reactive({
    JWT: "",
    connexion(login: string, motDePasse: string, succes:()=>void, echec:()=>void): void{
        function connect():void{
            fetch("https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/auth", {
            method: "POST",  
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: login, password: motDePasse}),
            }).then(
                reponsehttp => {  
                    console.log(reponsehttp.json());
                        console.log(reponsehttp);  

                    if(reponsehttp.status !== 200){
                        echec();
                    }else{
                        reponsehttp.json().then(reponseJSON =>{
                            authentificationToken.JWT = reponseJSON["token"];
                        })
                    }    
                }
            )
        }
    }
});

