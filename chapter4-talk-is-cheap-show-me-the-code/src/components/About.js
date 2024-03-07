import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <h2>This is Namaste React webseries</h2>
      {/* <User name={"Suraj Shrivastav"} location ={"Delhi"} learning ={"Javascript"}/> */}
      <UserClass name={"Suraj"} location={"New Delhi"} learning={"React"} />
    </div>
  );
};

export default About;
