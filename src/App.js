import react, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './css/App.css';
import Main from './pages/index';
import Login from './pages/Login';
import ChoosePlan from './pages/ChoosePlan';
import SignUp from './pages/SignUp';
import { auth, createUserProfileDocument} from './components/firebase/firebase';
import Header from './components/Header';

class  App extends Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await  createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
      }else {
        this.setState({currentUser: userAuth})
      }


    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    
    return (
      <div>

      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/choose-plan" component={ChoosePlan}/>
    </Switch>
      </div>
  );
}
}

export default App;
