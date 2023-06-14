import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { robots } from '../robots';
import './App.css';


// As used, App is considered a Smart Component because it holds state (it isn't a Pure Function)
// As such, App (and others like it are Containers while Pure Function components are Components)
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
    const { robots, searchfield } = this.state; // destructuring: const {a,b } = obj is literally obj.a and obj.b 
    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes( searchfield.toLowerCase() );
    } );
    return !robots.length ?  // NOTE: if robots.length is 0 it would be false so !robots.length makes it true which is what we want logically
      // We are also using a ternary statement instead of an ifelse logic tree
      // It is a return of whatever the ternary spits our (why return precedes the TS)
      <h1>Loading</h1> :
      ( <div className='tc' >
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox searchChange={ this.onSearchChange } />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredRobots } />
          </ErrorBoundary>
        </Scroll>
      </div >
      );
  }
};

export default App;