function UserDetails () {
    return(
    <div className="container-user-details">
        <form className="form-details">
            <h1>{`Detalhes ${'00001'}`}</h1>
            <label htmlFor="">Login</label>
            <input type="text" value="00001"  disabled />
            <label htmlFor="">Nome</label>
            <input type="text" value="00001" disabled />
            <label htmlFor="">E-mail</label>
            <input type="text" value="00001" disabled />
            <label htmlFor="">Data de Criação</label>
            <input type="text" value="00001" disabled />
            <button>Voltar</button>
        </form>
    </div>
    )
}

export default UserDetails;