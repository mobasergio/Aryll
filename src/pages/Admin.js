import React, { useState } from "react";
import firebase from "../firebase/index";
import Panel from "./Panel";

const Admin = () => {
  const [account, setAccount] = useState({email: "", password: ""});
  const [panel, setPanel] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(account.email, account.password).then((account) => {
      setPanel(true)
      console.log(account)
    })
    .catch(function (e) {
      setError(true);
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
          <input name="email" type="email" placeholder="Email" value={account.email} onChange={handleInputChange}/>
          <input name="password" type="password" placeholder="Password" value={account.password} onChange={handleInputChange}/>
          <input type="submit" value="Log in"/>
          <p style={{display: error ? 'block' : 'none'}}>Ya lo has escrito mal miralo bien por favor ya</p>
        </form>
      </div>
    </main>
  );
};

export default Admin;
