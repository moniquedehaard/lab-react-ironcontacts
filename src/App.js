import React from 'react';
import './App.css';
import contacts from './contacts.json';

// const firstFive = contacts.slice(0, 5);
// console.log(firstFive);

class App extends React.Component {
  state = {
    counter: 5,
    displayed: contacts.slice(0, 5),
  }

  handleClick = () => {
    const count = this.state.counter+1;
    this.setState({
      counter: count,
      displayed: contacts.slice(0,count)
    })
  }  
  
  sortNameByClick = () => {
    const currentList = contacts.slice(0, this.state.counter);
    currentList.sort((a,b) => {
      const name1 = a.name.toLowerCase();
      const name2 = b.name.toLowerCase();

      if (name1 < name2){
        return -1
      } else if (name1 > name2) {
        return 1
      } else {
        return 0
      }
    })

    this.setState({
      displayed : currentList
    })
  }

  sortPopByClick = () => {
    const currentList = contacts.slice(0, this.state.counter);

    currentList.sort((a,b) => {
      return b.popularity - a.popularity
    });

    this.setState({
      displayed: currentList
    })

  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handleClick}>Click here for next actor</button>
        <button onClick={this.sortNameByClick}> Sort by name </button>
        <button onClick={this.sortPopByClick}> Sort by popularity </button>
  
        <table>
          <thead>
            <tr>
              <th> Picture </th>
              <th> Name </th>
              <th> Popularity </th>
            </tr>
          </thead>
          <tbody>         
            {this.state.displayed.map(data => {
              return (
                <tr key={data.id} >
                  <td> <img src={data.pictureUrl}  alt="actor"/> </td>
                  <td> {data.name} </td>
                  <td> {data.popularity} </td>
                 </tr>
              )
            })
          }
          </tbody>
         </table>
      </div>
    ) 
  }
}

export default App;