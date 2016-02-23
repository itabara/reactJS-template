import ReactDOM from 'react-dom';
import React from 'react';
import ContactsList from './ContactsList'

let contactsValue = [{
  id:1,
  name: 'Iulian',
  phone: '111 555 2222'
},
{
  id:2,
  name: 'Emilian',
  phone: '555 222 2222'
},
{
  id:3,
  name: 'Doina',
  phone: '555 444 2222'
},
{
  id:4,
  name: 'Rebeca',
  phone: '555 111 2222'
}];

class App extends React.Component {
  render(){
      return (
        <div>
          <h1> Contacts List</h1>
          <ContactsList contacts={this.props.contacts}/>
        </div>
      )
  }
}

ReactDOM.render(<App contacts={contactsValue}/>, document.getElementById('app'));
