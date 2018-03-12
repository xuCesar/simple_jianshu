import {Route} from 'react-router-dom';
import Nav from 'nav/Nav';
import Home from 'view/home/Home';
import SignIn from 'view/user/SignIn';
import SignUp from 'view/user/SignUp';
import S from './style.scss';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={S.layout}>
                <Nav/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/sign_in" component={SignIn}/>
                <Route exact path="/sign_up" component={SignUp}/>
            </div>
        )
    }
}
