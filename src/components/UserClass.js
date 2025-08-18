import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-about">
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count increment
        </button>
        <h3>Name : {name}</h3>
        <h4>Location : Harayana</h4>
        <h4>Contect : @aakansha123</h4>
      </div>
    );
  }
}
export default UserClass;
