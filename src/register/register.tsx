import React, { ChangeEvent } from 'react';
import axios from "axios";
import { ErrorScreen } from '../errorScreen/errorScreen';
import Button from '@material-ui/core/Button'

class Register extends React.Component<{}, { username: string, password: string, reply: boolean}>{
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      reply: false
    }
  }

  getAll = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  register = async () => {
    try {
      const response = await axios.post('http://localhost:3000/insert_user', {username:this.state.username,
        password:this.state.password}
      );
      this.setState({reply: !!response});
      //console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  manageUsername = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: event.target.value, password: this.state.password });
    console.log(this.state.username);
  }

  managePassword = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ username: this.state.username, password: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit ={this.register}>
        username: <input onChange={this.manageUsername} type="text" name="username" value={this.state.username}
          id="username" placeholder="username"/>
        <br/>
        password: <input onChange={this.managePassword} type="password" name="password" value={this.state.password} 
          id="password" placeholder="password"/>
        <Button 
          type="submit" 
          variant="contained">
            Register
          </Button>
        <br/>
        </form>
        {this.state.reply.toString()}
        <ErrorScreen error=" this error is from register screen"> 'extra stuff from children'</ErrorScreen>
      </div>
    )
  }
}

export {Register};
