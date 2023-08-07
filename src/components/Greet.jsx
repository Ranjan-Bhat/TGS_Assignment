//import {useState} from 'react'
import { useData } from "../contextProvider/ContextProvider";
//import {Greet1} from './Greet1'
import { useNavigate } from "react-router-dom";
export const Greet = () => {
  const navigate = useNavigate();
  //const [name, setName] = useState('');
  const { name, setName } = useData();
  // const [user, setUser] = useState('');

  const handleLogin = () => {
    localStorage.setItem("login", "true");
    navigate("/dashboard");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  //const css1 = style={{border: '2px solid red'}

  // const css1 = {
  //   borderSize: '2px',
  //   border
  // }
  // if(name.length <= 3){
  //   return
  // }
  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
      {/* {name && <div>Hello {name}</div>} */}
      {/* {(name.length <= 3) ? <p style={css1}>Hello World</p> : <div style={css2}>Hello {name}</div> } */}
      {/* <Greet1 name={name}/> */}
    </>
  );
};
