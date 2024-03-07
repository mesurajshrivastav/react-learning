import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    constructor() {
        super()
        console.log("parent constructor called");
    }

    componentDidMount(){
        console.log("parent componentDidMount called");
    }

    render() {
        return (
            <div>
                {console.log("parent render called")}
              <h1>About us</h1>
              <h2>This is Namaste React webseries</h2>
              <UserClass name={"Suraj"} location={"New Delhi"} learning={"React"} />
            </div>
          );
    }
} 

export default About;
