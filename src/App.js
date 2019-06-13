import React from 'react';
import Validation from './Components/Validation';
import Char from './Components/Char';

class App extends React.Component {
  state = {
    userInput: ''
  };

  inputChangeHandler = event => {
    this.setState({userInput: event.target.value})
  };

  deleteCharHandler = index => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({userInput: updatedText});
  };

  render() {
      const charList = this.state.userInput.split('').map((char, index) => {
          return <Char
              character={char}
              key={index}
              clicked={() => this.deleteCharHandler(index)}/>
      });

      return (
        <div className="App">
          <input
              type="text"
              onChange={this.inputChangeHandler}
              value={this.state.userInput} />
          <p>{this.state.userInput}</p>
            <Validation inputLength={this.state.userInput.length} />
            {charList}
        </div>
      );
  }
}

export default App;
