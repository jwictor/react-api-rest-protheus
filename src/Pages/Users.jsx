import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Users () {

    const [usuarios,setUsuarios] = useState()
    const navigate = useNavigate()

    const getUsers = async () => {

        try{
            // const uri =`http://localhost:8080/rest/users`
            const uri =`http://agropecuariacamila126535.protheus.cloudtotvs.com.br:4050/rest/users`
            const response = await fetch(uri)
            const jsonresponse = await response.json()

            const resources = jsonresponse.resources
            const usuariosOrdenados = resources.sort(function(x,y) {
                const a = x.id
                const b = y.id

                return a > b ? 1 : a === b ? 0 : -1
            })

            setUsuarios(usuariosOrdenados)

        } catch(err) {
            console.log("ERRO LISTA USUARIOS => ", err)
        }

    } 

    useEffect(() => {getUsers()})
 
    return(
    <div className="container-users">
        {
            usuarios === undefined
            ?
            <h2>Carregando...</h2>
            :
            usuarios.map((usuario) => (
                <div className="card-user" key={usuario.id}>
                    <h1>{usuario.id}</h1>
                    <p>{usuario.displayName}</p>
                    <button onClick={() => navigate(`/users/${usuario.id}` )} >Ver Detalhes</button>
                </div>
            ))
        }
    </div>
    )
}

export default Users;