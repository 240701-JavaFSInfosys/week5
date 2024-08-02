import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hypotenuse } from './components/HypotenuseComponent/Hypotenuse';
import { EmployeeContainer } from './components/EmployeeComponent/EmployeeContainer';
import { data } from './employeeData';

/* In this demo, we'll use react-router-dom to establish routes for our components \
This is what lets us dynamically render components based on URL endpoints
See below for the syntax!*/
function App() {
  return (
    <div className="App">
      <h3>Welcome to the Events and Routing demo!</h3>
      <p>nothing much on the homepage, navigate to different endpoints to see different components!</p>

      <BrowserRouter>
          <Routes>
              <Route path="/hyp" element={<Hypotenuse/>}></Route>
              <Route path="/emp" element={<EmployeeContainer incomingData={data}/>}></Route>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
