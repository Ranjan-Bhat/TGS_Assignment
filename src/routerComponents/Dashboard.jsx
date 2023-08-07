import { useData } from "../contextProvider/ContextProvider";
export const Dashboard = () => {
  const { name } = useData();
  // if(localStorage.getItem('login')){
  //   retur
  // }
  console.log(typeof localStorage.getItem("login"));
  return (
    <>
      <h1>Dashboard Page</h1>
      {Boolean(localStorage.getItem("login")) ? (
        <h3>Welcome {name}</h3>
      ) : (
        <h3>User has not logged in</h3>
      )}
    </>
  );
};
