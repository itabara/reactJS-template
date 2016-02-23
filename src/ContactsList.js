import ReactDOM from 'react-dom';
import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
  constructor(){
    super();
    this.state={
      search: ''
    };
  }

  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)})
  }

  render() {
      let filteredContacts = this.props.contacts.filter(
        (contactItem) =>{
          return contactItem.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );
      return (
        <div>
        <ul>
            {filteredContacts.map((contactItem) => {
              return <Contact contact={contactItem} key={contactItem.id}/>
            })}
        </ul>
        Search:
        <input type="text"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}/>
        </div>
      )
  }
}

export default ContactsList;
