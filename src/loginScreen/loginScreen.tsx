import React, {ChangeEvent} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from '@material-ui/core/Button'

class LoginScreen extends React.Component<{}, { username: string, password: string, loginSuccess: boolean}>{
    constructor(props: any) {
      super(props);
      this.state = {
        username: "",
        password: "",
        loginSuccess: false
      }
    }

    login = async () => {
      try {
        const response: string = await axios.post('http://localhost:3000/login');
        if(response === 'User credentials correct'){
            this.setState({loginSuccess: true});
        }
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

    handleClick=()=>{
      if(this.state.loginSuccess == true){
        this.props.history.push({ pathname: '/search'});
      }
      else{
        console.log('Incorrect Username or Password');
      }
    }

    /*renderComp(){
      if(this.state.loginSuccess===true){
        return(<Component/>);
      }
      else{
        return(<div>Incorrect Username or Password</div>);
      }
    }*/
    render(){
        return(
        //<div>
        <div>
          <form onSubmit ={this.login}>
          username: <input onChange={this.manageUsername} type="text" name="username" value={this.state.username}
          id="username" placeholder="username"/>
          <br/>
          password: <input onChange={this.managePassword} type="password" name="password" value={this.state.password} 
          id="password" placeholder="password"/>
          <br/>
          <Button 
            component = {Link} 
            to="/search" 
            variant="contained" 
            color = "secondary">
            Login
          </Button>
          </form>
        </div>
        //  {this.renderComp()};
        //</div>
        );
    }
}

export {LoginScreen};