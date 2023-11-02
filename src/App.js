import {  useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";


import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import UploadFiles from "./routes/upload/upload-files";
//import Checkout from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);


  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route path="/upload-files" element={<UploadFiles/>}/>
      <Route path="auth" element={<Authentication />}/>
      
      </Route>
    </Routes>
  );
};

export default App;
