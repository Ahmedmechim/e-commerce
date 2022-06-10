import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { userLogin } from "../Redux/userAction";

const Login = () => {
  const formStyle = {
    padding: "30px 20px",
    width: 300,
    margin: "40px auto  0 auto",
  };
  const inputStyle = {
    border: "none",
    borderBottom: "1px solid",
    borderRadius: "0",
  };
  const theUsers = useSelector((state) => state.user);
  const { user } = theUsers;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let handelSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      {user ? (
        <Navigate to="/profile" />
      ) : (
        <div>
          <Form style={formStyle} onSubmit={handelSubmit}>
            <h3>Se connecter</h3>
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
            <Button
              variant="primary"
              type="submit"
              style={{ margin: "10px 0 0 0" }}
            >
              Se connecter
            </Button>
          </Form>
          <Link to="/signup">
            <Button variant="primary" type="submit" style={{ margin: "0px" }}>
              Créer un compte
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
