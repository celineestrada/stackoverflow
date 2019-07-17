import React, { ChangeEvent } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class SearchScreen extends React.Component<{}, { query: string, reply: boolean}>{
    constructor(props: any) {
      super(props);
      this.state = {
        query: "",
        reply: false
      }
    }
    /*
    search = async () => {
      try {
        const response = await axios.get('http://localhost:3000/insert_user', {username:this.state.username,
          password:this.state.password}
        );
        this.setState({reply: !!response});
      } catch (error) {
        console.error(error);
      }
    }*/

    topQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/top_questions');
        this.setState({reply: !!response});
      } catch (error) {
        console.error(error);
      }
    }

    manageQuery = (event: ChangeEvent<HTMLInputElement>) => {
      this.setState({ query: event.target.value});
      console.log(this.state.query);
    }
    render(){
        return(
          <div>
          Search bar will go here...
          {/*<form onSubmit ={this.search}>
          Search: <input onChange={this.manageQuery} type="text" name="query" value={this.state.query}
            id="query" placeholder="search"/>
          <Button type="submit" >Search</Button>
          </form>
        {this.state.reply.toString()}*/}
          <br/>
          <Button 
          component = {Link} 
          to="/ask" 
          variant="contained"
          color = "secondary">
            Create New Question
          </Button>
          <br/>
          Top Questions:

          </div>
        )
    }
}

export {SearchScreen};
