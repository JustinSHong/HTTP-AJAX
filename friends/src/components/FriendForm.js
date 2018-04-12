import React, { Component } from "react";
import axios from "axios";

class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  // handle new input as user types
  handleNewInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // POST request handler
  handleCreateFriend = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    // POST request
    axios
      .post("http://localhost:5000/friends", friend)
      .then(savedFriend => {
        console.log(friend);
        this.props.addFriend();
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      // Add friend with this form */
      <form>
        <div>
          <label>
            Name:
            <input
              type="text"
              onChange={this.handleNewInput}
              name="name"
              value={this.state.name}
            />
          </label>
        </div>

        <div>
          <label>
            Age:
            <input
              type="text"
              onChange={this.handleNewInput}
              name="age"
              value={this.state.age}
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="text"
              onChange={this.handleNewInput}
              name="email"
              value={this.state.email}
            />
          </label>
        </div>

        <button type="button" onClick={this.handleCreateFriend}>
          Create Friend
        </button>
      </form>
    );
  }
}

export default FriendForm;