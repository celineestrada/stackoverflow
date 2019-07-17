import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";
import Button from '@material-ui/core/Button'


class AskQuestion extends React.Component<{}, { title: string, 
  description: string, reply: boolean}>
{
    constructor(props: any) {
      super(props);
      this.state = {
        title: "",
        description: "",
        reply: false
      }
    }
    
    ask = async () => {
      try {
        const response = await axios.post('http://localhost:3000/insert_question', 
        {title:this.state.title, description:this.state.description});
        //this.setState({reply: !!response});
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  
    manageTitle = (event: ChangeEvent<HTMLInputElement>) => {
      this.setState({ title: event.target.value, 
        description: this.state.description });
    }
  
    manageDescription = (event: ChangeEvent<HTMLInputElement>) => {
      this.setState({ title: this.state.title, 
        description: event.target.value });
    }
  
    render(){
        return(
          <div>
          Ask your question here!
          <form onSubmit ={this.ask}>
          Title: <input onChange={this.manageTitle} type="text" 
            name="title" value={this.state.title}
            id="title" placeholder="title"/>
          <br/>
          Descritpion: <input onChange={this.manageDescription} type="text" 
            name="description" value={this.state.description}
            id="description" placeholder="description"/>
          <Button 
            component = {Link} 
            to="/questionList" 
            variant="contained"
            color = "secondary" 
            type="submit" >
              Create
          </Button>
          </form>
        {this.state.reply.toString()}        
          </div>
        )
    }
}

export {AskQuestion};