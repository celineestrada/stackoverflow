import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const ErrorScreen = (props: any) => {
    console.log(props);
    return(
    <div>
        Error :(
        {props.children}
        {props.error}
        <br/>
        <Button component = {Link} 
            to="/register" 
            variant="contained" 
            color = "secondary">
            Register
        </Button>
    </div>
    )
}

export {ErrorScreen};
