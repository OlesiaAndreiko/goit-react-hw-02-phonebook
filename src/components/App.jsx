import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import initalContacts from '../components/contacts.json';
import { Component } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormContact } from './FormContact/FormContact';
import { Container } from './Container/Container.styled';
import { Heading } from './Heading/Hading';

export class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
      })
    ),
    filter: PropTypes.string,
  };

  state = {
    contacts: initalContacts,
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const newContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <Heading title={'phonebook'}></Heading>
        <FormContact onSubmit={this.addContact} contacts={contacts} />
        <Heading title={'contacts'}></Heading>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList contacts={newContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}