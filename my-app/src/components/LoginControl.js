import React, { Component } from 'react'


const UserGreeting = () => <h1>Welcome Back</h1>
const GuestGreeting = () => <h1>Please Sign Up</h1>
const LoginButton = props => <button onClick={props.onClick}>Login</button>
const LogoutButton = props => <button onClick={props.onClick}>Logout</button>

const Greeting = props => {
    const { isLoggedIn } = props
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

export default class LoginControl extends Component {
  state = {
    isLoggedIn: false
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const { isLoggedIn } = this.state

    let button = null
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}