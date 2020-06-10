import React, { useState } from "react";
import firebase from "../firebase/index";
import Panel from "./Panel";

const Admin = () => {
  const [account, setAccount] = useState({email: "", password: ""});
  const [panel, setPanel] = useState(false);
  const [error, setError] = useState(0);

  const errorCodes = {
    0: "",
    1: "Asi no es, ponlo bien",
    2: "Que asi no es miralo bien que esta mal",
    3: "Mira yo paso ya"
  }
  
  const errorMessages = () => {
    if (error !== 3) { setError((prevState) => (prevState + 1)) }
  }

  const handleSubmit = event => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(account.email, account.password).then((account) => {
      setPanel(true)
    })
    .catch(function (e) {
      errorMessages();
      setAccount({email: "", password: ""})
    });
  }

  const handleInputChange = e => {
    const {name, value} = e.target
    setAccount({...account, [name]: value})
  }

  if (panel) {
    return (
      <Panel />
    )
  }

  return (
    <main>
      <div id="admin">
        <form onSubmit={handleSubmit}>
          <h1>Admin panel</h1>
          <input name="email" type="email" placeholder="Email" value={account.email} onChange={handleInputChange} required/>
          <input name="password" type="password" placeholder="Password" value={account.password} onChange={handleInputChange} required/>
          <input type="submit" value="Log in"/>
          <p style={{display: error !== 0 ? 'block' : 'none'}}>{errorCodes[error]}</p>
        </form>
      </div>
    </main>
  );
};

export default Admin;
