import React, { Component } from 'react';
import "./index.css";
//import { withAuth0 } from '@auth0/auth0-react';
import Table from './Table'
import Form from './Form'
import config from './config'
import Firebase from 'firebase'
//import LoginButton from './login-button';
import logo from './assets/bloodPressure.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'



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
                return  i !== index
            })
        })
    }
    render() {
         //const { isLoggedIn, loginWithRedirect } = withAuth0
         const { characters } = this.state
        
         return (

          <Container>
            <Row>

          <div className="container">
             
             
             <div className="card text-center">
             
                
                <div class="p-3 mb-2 bg-primary text-white"><h3>Marcelo's blood pressure readings</h3></div>
              </div>
             <Col>
              <img src={logo} alt="test" />
              </Col>
              
           </div> 
            

            <Table characterData={characters} removeCharacter={this.removeCharacter}  />
            <h3>Add New Reading</h3>
            <Form handleSubmit={this.handleSubmit} />
            
           </Row> 
           
          </Container>
         )
    }

    
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    } 
}   
    
export default App;