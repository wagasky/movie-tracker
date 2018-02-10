import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser} from '../actions/index';
import { userSignIn, addNewUser } from '../apiCall'



class Register extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      name: '',
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.className;
    const value = e.target.value;

    this.setState({ [field]: value });
  }

  registerSubmit = async (e) => {

    const { name, email, password } = this.state

    e.preventDefault();
    const results = await addNewUser(name, email, password);
    const userResults = await userSignIn(email, password);
    const user = await userResults.data
    this.props.setUser(user)
  }

  render() {
    return (
      <div className="log-in-form">
        <form onSubmit={this.registerSubmit}>
          <input type="text" className="name" placeholder="Your Name" name="email" onChange={this.handleChange}/>
          <input type="text" className="email" placeholder="email address" name="email" onChange={this.handleChange}/>
          <input type="password" className="password" placeholder="password" name="password" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// export const mapStateToProps = (store) => ({
//   name: store.user.name
// })

export const mapDispatchToProps = (dispatch) => ({
  addNewUser: (user) => dispatch(addNewUser(user)),
})

export default connect(null, mapDispatchToProps)(Register)


