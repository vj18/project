const  login=()=>{
    const fnclick=()=>{
        { alert('login success')}
    }
    return <div className="login ">
        <p><b>USER NAME:</b> <input type="text" /> </p>
        <p><b>PASSWORD:</b> <input type="password" /> </p>
        <p><b>EMAIL:</b> <input type="email" /> </p>
        <p> <button onClick={fnclick} >SUBMIT</button> </p>

    </div>
}
export default login;