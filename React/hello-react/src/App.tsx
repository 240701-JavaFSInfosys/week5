import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent/FirstComponent';
import { ParentComponent } from './components/ParentComponent/ParentComponent';
import { ChildComponent } from './components/ChildComponent/ChildComponent';
import { UserComponent } from './components/UserComponent/UserComponent';

/* The App.tsx is the root of our app (at least when it comes to rendering stuff on the page - specifically components) 

Most of coding will go elsewhere, but the App.tsx lets us control WHAT gets rendered

We put the components we want to render in the div of the return()We can render standalone TSX within the div as well, but usually we'll just be registering components*/
function App() {
  return (
    <div className="App">
       <h1>Hello React! We'll make great frontends with you</h1>

       <p>We are writing in TSX, which is like HTML for React TypeScript</p>
       
       <h3>React will reload the webpage with every saved change to the app!</h3>

       <FirstComponent></FirstComponent>
       <ParentComponent></ParentComponent>
       <UserComponent></UserComponent>

    </div>
  );
}

export default App;
