import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_MAIN_INFO } from "./store/actionName/actionNames";
import MapPage from "./pages/MapPage";
import { routers } from './config/router';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MAIN_INFO });
  }, [])

  return (

    <div>
      <Switch>
        <Route path={routers.MAPPAGE} exact component={MapPage} />
      </Switch>
    </div>
  );
}

export default App;
