import React, { Component } from "react";
import ReactDOM  from 'react-dom/client';


// there are two ways for react Component
// 1. class based
// 2. function based

// const Heading = () => {
//     return <h1 className="heading">Hi i am heading in functional component</h1>
// }
// const Heading = () => <h1>Hi i am heading</h1>;

// const Heading = () => (
//     <div id="container">
//     <h1 className="head">Hi i am heading without  return keyword</h1>
//     </div>
// )

// const Title = () => (
//     <h1 className="title">Namaste React by Akshay saini</h1>
// );

// // component compositions
// const Para = () => (
//     <div className="container">
//         <Title/>
//         <h2>React</h2>
//         {age}
//         <p>hi this is react and develope by facebook developers
//         </p>
//     </div>
// )

const hello = (
    <h1>hwllo whus ksdksk </h1>
);
const Para = () => (
    <h2>This is hello world program</h2>,
    {hello}
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Para/>);

