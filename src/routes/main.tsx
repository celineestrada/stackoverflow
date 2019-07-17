import React from 'react';
import { Register } from '../register/register';
import { HomeScreen } from '../home-screen/home-screen';
import { ErrorScreen } from '../errorScreen/errorScreen';
import { LoginScreen } from '../loginScreen/loginScreen';
import { SearchScreen } from '../search-screen/search-screen';
import { AskQuestion } from '../ask_question/ask_question';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class Routes extends React.Component {
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path ="/" component={HomeScreen}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={LoginScreen}/>
                    <Route path="/search" component={SearchScreen}/>
                    <Route path="/ask" component={AskQuestion}/>
                    <Route component={ErrorScreen}/>
                </Switch>
            </Router>
        )
    }
}

export { Routes };

// import React, { ChangeEvent } from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// class App extends React.Component {
//     render(){
//         <div>
//             Welcome to Stack Overflow!
//             <ul>
//             <li>Login</li>
//             <li>Register</li>
//             </ul>
//             {/*used to display whatever you include between the opening and closing
//             tags when invoking a component.
//             remove "this" if you are using stateless functions.*/}
//             {this.props.children}
//         </div>
//     }
// }
// export default App;

// ReactDOM.render((
//     <Router history = {browserHistory}>
        
//     </Router>
// ))