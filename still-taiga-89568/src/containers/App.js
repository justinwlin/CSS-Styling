import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots, incrementIndex } from '../actions';

import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Timer from 'react-compound-timer';

let index = 0;
const mapStateToProps = state => {
  index = state.searchRobots.index + 1;
  if (index >= state.requestRobots.robots.length) {
    index = 0;
  }
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    speakerIndex: state.searchRobots.index
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
    onIndexIncrement: () => dispatch(incrementIndex(index)),
    onRefresh: () => dispatch(setSearchField(''))
  };
};

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      makingAnnouncement: false,
    }
  }

  makeAnnouncement = () => {
    this.setState({ makingAnnouncement: true });
    // needs to be wired up to the actual phone announcement
  }

  stopAnnouncement = () => {
    this.setState({ makingAnnouncement: false });
    // needs to be wired up to the actual phone announcement
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  myFunction = () => {
    const { onIndexIncrement, onRefresh } = this.props;
    console.log('Test');
    onIndexIncrement();
    onRefresh();
    this.setState({timer: false});
  };


  render() {
    const { robots, searchField, isPending, speakerIndex } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.phone.includes(searchField);
    });


    let makeAnnouncementBtn = <button className="button" id="announcement-button" onClick={this.makeAnnouncement}>
                  Make an Announcement
                </button>;
    if (this.state.makingAnnouncement) {
      makeAnnouncementBtn = <button className="button activeAnnouncement" id="announcement-button" onClick={this.stopAnnouncement}>
                  Stop Announcing
                </button>;
    }

    return (
      <div className="tc">
        <Navbar />
        <Header />
        <hr />
        <div>
          <buttons class="buttons">
            <button
              onClick={this.myFunction}
              className="button"
              id="pass-button"
            >
              Pass the Microphone
            </button>
            {makeAnnouncementBtn}
          </buttons>
        </div>

        {isPending ? (
          <div class="loading">Loading callers...</div>
        ) : (
            <ErrorBoundry>
              <CardList robots={filteredRobots} speakerindex={speakerIndex} />
            </ErrorBoundry>
          )}
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
