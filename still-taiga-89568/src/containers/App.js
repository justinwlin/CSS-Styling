import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots, incrementIndex } from '../actions';

import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import Navbar from '../components/Navbar'
import Header from '../components/Header'


let index = 0;
const mapStateToProps = (state) => {
  index = state.searchRobots.index + 1
  if (index >= state.requestRobots.robots.length) {
    index = 0
  }
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    speakerIndex: state.searchRobots.index
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
    onIndexIncrement: () => dispatch(incrementIndex(index)),
    onRefresh: () => dispatch(setSearchField("")),
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  myFunction = () => {
    const { onIndexIncrement, onRefresh } = this.props;
    console.log("Test");
    onIndexIncrement();
    onRefresh();
  }

  render() {
    const { robots, searchField, isPending, speakerIndex } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.phone.includes(searchField);
    })
    return (
      <div className='tc'>
        <Navbar />
        <Header />
        <hr></hr>
        <div> 
        <buttons>
          <input
                onClick={this.myFunction}
                className="button"
                id = "buttonColor"
                type="submit"
                value="Pass Microphone"
              />

              <input
                className="button"
                type="submit"
                value="Make an Announcement"
              />
        </buttons>
        </div>

            {isPending ? <h1>Loading</h1> :
              <ErrorBoundry>
                <CardList robots={filteredRobots} speakerindex={speakerIndex} />
              </ErrorBoundry>

            }
          </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)
