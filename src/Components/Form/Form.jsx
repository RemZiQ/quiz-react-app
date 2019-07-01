import React, { useState } from 'react';

// const Form = ({ onSubmitInput }) => {
//   const [inputValue, setInputValue] = useState();
//   const onChangeHandler = e => setInputValue(e.target.value);
//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     onSubmitInput(inputValue);
//     setInputValue('');
//   };

//   return (
//     <form onSubmit={onSubmitHandler}>
//       <input value={inputValue} type="text" onChange={onChangeHandler} />
//       {console.log(inputValue)}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  onChangeHandler = e => this.setState({ inputValue: e.target.value });

  onSubmitHandler = (e) => {
    const { onSubmitInput } = this.props;
    const { inputValue } = this.state;
    e.preventDefault();
    onSubmitInput(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input value={inputValue} type="text" onChange={this.onChangeHandler} />
        {console.log(inputValue)}
        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default Form;
