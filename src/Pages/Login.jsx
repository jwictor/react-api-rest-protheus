import { useNavigate } from "react-router-dom";


function Login () {

    const navigate = useNavigate()

    const fnConfirmar = async (event) => {
        event.preventDefault()
        console.log("EVENTO CONFIRMAR => ", event)

        const username = event.target.form.username.value;
        const password = event.target.form.password.value;
        const uriRest = `http://localhost:8080/rest/users?userName=${username.toLowerCase()}`;
        // const uriRest = `http://rosamaster129523.protheus.cloudtotvs.com.br:4050/rest/users?userName=${username.toLowerCase()}`;

        console.log('username =>', username);
        console.log('password =>', password);
        console.log('URIREST =>', uriRest);

        try{

            const response = await fetch(uriRest);

            // // TESTE
            // if (!response.ok) {
            //     throw new Error('Erro ao chamar a API');
            // }
            // const data = await response.json();

            // if (!data || !data.length) {
            // throw new Error('Dados inválidos recebidos da API, retorno =>');
            
            // }
            // // FIM TESTE
            
            const jsonlogin = await response.json()

            console.log('RESPONSE =>', response);
            console.log('JSONLOGIN =>', jsonlogin)

            if(jsonlogin.resources.length === 1){
                localStorage.setItem("@1app/displayname", jsonlogin.resources[0].displayName)
                navigate('/')
                window.location.reload()
            }else{
                alert("Usuario não encontrado")
            }

        }catch(err){
            console.log("ERRO => ", err)
        }
    } 

    const fnCancelar = (event) => {
        event.preventDefault()
    console.log("EVENTO CANCELAR => ", event)
    navigate('/')
    }

    return(
    <div className="container-login">
        <form className="form-login">
            <h1>{`</Login`}</h1>
            <label htmlFor="username">Login:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
            <div className="buttons">
                <button className="button-confirmar" onClick={(event) => fnConfirmar(event)}>Confirmar</button>
                <button className="button-cancelar" onClick={(event) => fnCancelar(event)}>Cancelar</button>
            </div>
        </form>
    </div>
    )
}

export default Login;