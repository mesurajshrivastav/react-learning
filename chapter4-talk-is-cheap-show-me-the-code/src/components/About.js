import UserClass from "./UserClass";
import { Component } from "react";
import User from "./User";

class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="font-bold">
        <h1 className="font-bold text-lg">About us</h1>
        <h2>This is Namaste React webseries</h2>
        <div className="border m-10 p-5">
          {/* <UserClass name={"Suraj"} location={"New Delhi"} learning={"React"} /> */}
          <User
            name={"Suraj Shrivastav"}
            location={"New Delhi"}
            contact={"mesurajshrivastav@gmail.com"}
          />
        </div>
      </div>
    );
  }
}

export default About;
