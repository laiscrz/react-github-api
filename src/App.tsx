import { Outlet } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa6";

import classes from "./App.module.css";

function App() {


  return (
    <>
      <div className={classes.app}>
        <span className={classes.icon}><FaGithubAlt /></span>
        <h1>Github Finder</h1>
        <Outlet />
      </div>
    </>
  )
}

export default App
