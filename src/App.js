import './App.css';
// import Login from './page/login/login';
import React from 'react';
// import Ecamascript from './Es6/let-const';
// import Arrow from './Es6/arraow';
// import TemplateLitarals from './Es6/template-litrals';
// import Destructuring from './Es6/destructuring';
// import DefaultParametrs from './Es6/default-parametrs';
// import SpreadOpertaor from './Es6/default-parametrs';
// import Classes from './Es6/classes';
// import Modules from './Es6/modules/modules';
// import PromisesInfo from './Es6/promises';
// import UserProfile from './Es6/async-await';
// import ObjectAssign from './Es6/object-assign';
// import PushMethod from './Es6/array-methods';
// import ArrayMethod from './Es6/array-methods';
// import Login from './shared/components/auth/login/login'
import { AuthProvider } from './context/AuthContext';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      {/* <Ecamascript />  */}
      {/* <Arrow/> */}
      {/* <TemplateLitarals/> */}
      {/* <DefaultParametrs/> */}
{/* <SpreadOpertaor/> */}
{/* <Classes/> */}
{/* <Modules/> */}
{/* <PromisesInfo/> */}
{/* <UserProfile/> */}
{/* <ObjectAssign/> */}
{/* <ArrayMethod/> */}
{/* <Login/> */}
<AuthProvider>
  <Router/>
</AuthProvider>
      {/* child Component */}
     {/* <Login /> */}
    </div>
  );
}


export default App;
