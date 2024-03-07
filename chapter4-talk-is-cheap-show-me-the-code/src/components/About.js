import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component {
    constructor() {
        super()
        
    }
    render() {
        return (
            <div>
               
              <h1>About us</h1>
              <h2>This is Namaste React webseries</h2>
              <UserClass name={"Suraj"} location={"New Delhi"} learning={"React"} />
            </div>
          );
    }
} 

export default About;
