import React, { Component } from 'react';
//import { withAuth0 } from '@auth0/auth0-react';
import Table from './Table'
import Form from './Form'
import config from './config'
import Firebase from 'firebase'
import LoginButton from './login-button';
import logo from './assets/bloodPressure.jpg'



class App extends Component {
    constructor(props) {
        super(props)
        Firebase.initializeApp(config);
        this.state = {
          characters: []
        }
        this.state = {isLoggedIn: false};
        
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    

    componentDidMount() {
        this.getUserData()
    }

    componentDidUpdate(beforeState) {
        if (beforeState !== this.state) {
          this.writeUserData();
        }
    }

    writeUserData = () => {
        Firebase.database()
          .ref("/")
          .set(this.state);
        console.log("DATA SAVED");
    };

    getUserData = () => {
        let ref = Firebase.database().ref("/");
        ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);
          
        });
        console.log('Data retrieved')
    };

    removeCharacter = (index) => {
        const {characters} = this.state
        
        this.setState({
            characters: characters.filter((character, i) => {
                return  i !== index
            })
        })
    }
      render() {
         const { isLoggedIn, loginWithRedirect } = withAuth0
         const { characters } = this.state
        
         

          
          <div className="container">
              <h1>Marcelo's blood pressure readings</h1>
                <p>Add a date and the reading(high-low)</p>
                <img src={logo} alt='pic' height={100} width={100 }/>
            <Table characterData={characters} removeCharacter={this.removeCharacter}  />
            <h3>Add New</h3>
            <Form handleSubmit={this.handleSubmit} />

          </div> 
          
        )

    } 
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    } 
}   
    
export default App;