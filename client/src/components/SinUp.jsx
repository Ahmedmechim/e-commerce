import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Form, Button } from "react-bootstrap";
  import { useDispatch } from "react-redux";
import { userSignUp } from "../Redux/userAction";
  
  
  const SinUp = () => {
    const formStyle = { padding: "30px 20px", width: 300, margin: "40px auto" };
    const inputStyle = {
      border: "none",
      borderBottom: "1px solid",
      borderRadius: "0",
    };
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [role, setRole] = useState("user");
    const dispatch = useDispatch();
    let handelSubmit=(e)=>{
      e.preventDefault();
      dispatch(userSignUp({userName, email, password, phoneNumber, role}))
      setUserName("")
      setEmail("")
      setPassword("")
      setPhoneNumber("")
      setRole("user")
    }
  
    return (
      <div>
        <Form style={formStyle} onSubmit={handelSubmit}>
          <h3>Créer un compte</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Nom et Prénom"
              style={inputStyle}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Adresse e-mail"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Téléphone mobile"
              style={inputStyle}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <FormControl component="fieldset">
            <FormLabel component="legend">vous êtes</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <FormControlLabel
                value="user"
                control={<Radio />}
                label="Acheteur"
              />
              <FormControlLabel
                value="vendeur"
                control={<Radio />}
                label="Vendeur"
              />
            </RadioGroup>
          </FormControl>
          <Button variant="primary" type="submit" style={{ margin: "10px" }}>
            Créer
          </Button>
        </Form>
      </div>
    );
  };
  
  export default SinUp;
  