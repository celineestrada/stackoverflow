import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const HomeScreen = (props: any) => {
    console.log(props);
    return(
    <div>
        We love people who code
        {props.children}
        {props.error}
        <br/>
        <Button 
            component = {Link} 
            to="/login" 
            variant="contained"
            color = "secondary">
            Login
        </Button>
        <Button 
            component = {Link} 
            to="/register" 
            variant="contained"
            color = "secondary">
            Register
        </Button>
    </div>
    )
}

export {HomeScreen};