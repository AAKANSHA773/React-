import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo:
        {name : "dummy",
        location :"Default"}
    };

    console.log("Child consturctor");
  }
  async componentDidMount() {
    console.log("Child ComponentDidMount");
    const data = await fetch ('https://api.github.com/users/AAKANSHA773')
    const json = await data.json();

    this.setState({
        userInfo:json
    })
  }
  render() {
    const { name ,location,avatar_url} = this.state.userInfo;

    console.log("Child Render");
    return (
      <div className="user-about">
       <img src={avatar_url}/>
        <h3>Name : {name}</h3>
        <h4>Location : {location}</h4>
        
        <h4>Contect : @aakansha123</h4>
      </div>
    );
  }
}
export default UserClass;
