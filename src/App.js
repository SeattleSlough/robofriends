import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';


// As used, App is considered a Smart Component because it holds state
export class App extends Component {
  constructor () {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  // state.robots is [] at ths point

  componentDidMount() {
    fetch( `https://jsonplaceholder.typicode.com/users` )
      .then( response => response.json() )
      .then( users => this.setState( { robots: users } ) );
  }
  // state.robots is now updated with the JSON output

  onSearchChange = ( event ) => {
    this.setState( { searchfield: event.target.value } );
  };

  render() {
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes( this.state.searchfield.toLowerCase() );
    }
    );

    return (
      <div className='tc' >
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={ this.onSearchChange } />
        <CardList robots={ filteredRobots } />
      </div >
    );
  };
}
export default App;