import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };

    console.log("child constructor called");
  }

  componentDidMount() {
    console.log("child componentDidMount called");
  }

  render() {
    const { count, count2 } = this.state;

    const { name, location, learning } = this.props;
    return (
      <div className="user-card">
        <h2>count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 * 2,
            });
          }}
        >
          count increase
        </button>
        {console.log("child render called")}
        <h2>count : {count2}</h2>
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Learning : {learning}</h3>
      </div>
    );
  }
}

export default UserClass;
