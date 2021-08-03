import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Table from './Table'
import Form from './Form'
import config from './config'
import Firebase from 'firebase'
import LoginButton from './login-button';


class App extends Component {
    constructor(props) {
        super(props)
        Firebase.initializeApp(config);
        this.state = {
          characters: []
        }
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
            return i !== index
          }),
        })
    }
      render() {
    
        const { characters } = this.state
        
        return (
          
         
          
          <div className="container">
          <LoginButton />
          <Table characterData={characters} removeCharacter={this.removeCharacter}  />
          <Form handleSubmit={this.handleSubmit} />

          </div> 
          
        )
    } 
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    } 
}   
    
export default App;