// import { nanoid } from 'nanoid';
import { Component } from 'react';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };
  
  handleChange = evt => {
    console.log(evt.target.value)
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { onSubmit} = this.props
    e.preventDefault();
    const { name, number } = e.target.elements;
    onSubmit( name.value, number.value );

    this.reset();
  };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//     const { name, number } = this.state;
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id: nanoid(), name, number }],
//     }));
//     this.reset();
//   };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };



  render() {
    const {onSubmit} = this.props
    const { name, number } = this.state;
    return (
      <form autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="Submit">Add Contact</button>
      </form>
    );
  }
}
