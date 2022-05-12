import Input from "./components/Input/Input";
import { useState } from "react";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import "./App.css";

function App() {

  const [userForm, setUserForm] = useState({
    userName: "",
    password: ""
  })

  const onValidation = () => {
    if(userForm.userName === "" || userForm.password === ""){
      alert("Geçersiz Form")
    }else{
      alert("form Gönderildi")
    }
  }
  return (
    <div className="custom-page">
      <Form>
        <h2>Giriş Sayfası</h2>
        <Input
          value={userForm.userName} placeholder={"Kullanıcı Adı"} onChange={(e) => {
            // setUserForm({ userName: e.target.value, password:userForm.password})
            setUserForm({...userForm, userName: e.target.value})
          }}
        />

        <Input type="password"
          value={userForm.password} placeholder={"Parola"} onChange={(e) => {
           // setUserForm({ password: e.target.value, userName:userForm.userName})
           setUserForm({...userForm, password: e.target.value})
          }}
        />

        <Button
          text="Giriş Yap" onClick={onValidation}
        />
      </Form>
    </div>
  );
}

export default App;
