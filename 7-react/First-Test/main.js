import React from 'react';
import './style.css';
import ReactDOM  from 'react-dom/client';


const rootElement = document.querySelector("#root");

const root = ReactDOM.createRoot(rootElement);

const heading = React.createElement("h1",null,"Hello") //ReactNode

root.render(heading)

