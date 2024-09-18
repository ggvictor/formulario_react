
const UserForm = ({data, uptadeFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" placeholder="Digite seu nome" required autoComplete="off" value={data.name || ""} onChange={(e)=> uptadeFieldHandler("name", e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required autoComplete = "off" value={data.email || ""} onChange={(e)=> uptadeFieldHandler("email", e.target.value)}/>
        </div>
    </div>
  )
}

export default UserForm