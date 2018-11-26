import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Card.css';


const mapStateToProps = state => {
  return {
    index: state.searchRobots.index
  };
};

class ParticipantCard extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      id: props.id,
      phone: props.phone,
      conferenceSID: props.conference,
      personalSID: props.personal,
      mute: props.mute,
      voiceChange: props.voiceChange,

      voiceTxt: 'Chg.V',
      beepTxt: 'Beep',
      adminMatch: props.admin,

      adminTxt: '',
      speakerIndex: this.props.index,

      show: false, 
      timer: false
    };
    this.toggle = this.toggle.bind(this);
  }

  onChangeVoiceHigh = () => {
    console.log('works');
    console.log('A');
    this.setState({ voiceChange: true });
    this.setState({ voiceTxt: 'Chg.V' });
    fetch('https://nameless-ocean-33271.herokuapp.com/chgVoice', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: this.state.personalSID,
        pitch: 1.1
      })
    });
  };

  onChangeVoiceNormal = () => {
    console.log('works');
    console.log('B');
    this.setState({ voiceChange: true });
    this.setState({ voiceTxt: 'Chg.V' });
    fetch('https://nameless-ocean-33271.herokuapp.com/chgVoice', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: this.state.personalSID,
        pitch: 1
      })
    });
  };

  onChangeVoiceLow = () => {
    console.log('works');
    console.log('C');
    this.setState({ voiceChange: true });
    this.setState({ voiceTxt: 'Chg.V' });
    fetch('https://nameless-ocean-33271.herokuapp.com/chgVoice', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: this.state.personalSID,
        pitch: 1
      })
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.index !== nextProps.index) {
      this.setState({ speakerIndex: this.props.index });
    }
  }

  onBeep = () => {
    console.log(this.props.index);
    this.setState({ speakerIndex: this.props.index });
    if (this.state.beepTxt === 'Beep') {
      this.setState({ beepTxt: 'Boop' });
    } else {
      this.setState({ beepTxt: 'Beep' });
    }
    fetch('https://nameless-ocean-33271.herokuapp.com/playAudio', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: this.state.personalSID,
        url: 'https://www.soundjay.com/button/sounds/beep-08b.mp3'
      })
    });
  };

  setAdmin = () => {
    if (this.state.admin === '') {
      console.log('A');
      this.setState({ admin: 'Admin' });
    } else {
      console.log('B');
      this.setState({ admin: '' });
    }
  };

  toggle() {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  toggleTimer() {
    console.log("TIMER ON!");
    const { timer } = this.state;
    this.setState({ timer: !timer});
  }

  render() {
    return (
      <div>
        <div class="caller">
          <div id="circle"> {(this.state.id + 1)} </div>
          <div className="phone-number">{this.state.phone}</div>
          <div class="filler-info">
            <img src={require('./images/Dot.png')} />
            <span onClick={this.toggle} id="caret">
              v
            </span>
          </div>

          {this.state.id == this.state.speakerIndex && (
            <img src={require('./images/mic_brightBlue.png')} />
          )}
          {this.state.id != this.state.speakerIndex && (
            <img src={require('./images/Untitled.png')} />
          )}
        </div>

        {this.state.show && (
          <Expand sid={this.state.personalSID} id={this.state.id} />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ParticipantCard);

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalSID: props.sid,
      id: props.id
    };
  }

  onBeep = () => {
    this.setState({ speakerIndex: this.props.index });
    fetch('https://nameless-ocean-33271.herokuapp.com/playAudio', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: this.state.personalSID,
        url: 'https://www.soundjay.com/button/sounds/beep-08b.mp3'
      })
    });
  };

  onChangeVoiceHigh = () => {
    console.log('works');
    console.log('A');
    this.setState({ voiceChange: true });
    this.setState({ voiceTxt: 'Chg.V' });
    fetch('https://nameless-ocean-33271.herokuapp.com/chgVoice', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: this.state.personalSID,
        pitch: 1.1
      })
    });
  };

  onChangeVoiceNormal = () => {
    console.log('works');
    console.log('B');
    this.setState({ voiceChange: true });
    this.setState({ voiceTxt: 'Chg.V' });
    fetch('https://nameless-ocean-33271.herokuapp.com/chgVoice', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: this.state.personalSID,
        pitch: 1
      })
    });
  };

  onChangeVoiceLow = () => {
    console.log('works');
    console.log('C');
    this.setState({ voiceChange: true });
    this.setState({ voiceTxt: 'Chg.V' });
    fetch('https://nameless-ocean-33271.herokuapp.com/chgVoice', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: this.state.personalSID,
        pitch: 1
      })
    });
  };

  render() {
    return (
      <div class="user-card">
        <div>Participant {this.state.id} Setting</div>
        <div className="columns">
          <field className="center">
            <div className="buttons" id="center">
              <button onClick={this.onBeep} className="recording-button">
                Recording
              </button>
            </div>
          </field>
          <div />
        </div>

        <div className="field is-grouped volume-buttons" id="center">
          <button className="volume-button" onClick={this.onChanceVoiceLow}>
            Low
          </button>
          <button className="volume-button" onClick={this.onChanceVoiceNormal}>
            Normal
          </button>
          <button className="volume-button" onClick={this.onChanceVoiceHigh}>
            High
          </button>
        </div>
      </div>
    );
  }
}
