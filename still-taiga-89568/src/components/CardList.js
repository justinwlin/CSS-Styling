
import React from 'react';
import ParticipantCard from './Card';


class CardList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            robots: props.robots,
            admin: props.admin,
            speakerIndex: props.speakerIndex
        }
    }

    render(){
        return(<div>
            {
                this.state.robots.map((users, i) =>{
                    return(
                        <ParticipantCard
                        key ={i}
                        id={this.state.robots[i].id}
                        phone={this.state.robots[i].phone}
                        conference={this.state.robots[i].conferenceSID}
                        personal = {this.state.robots[i].userSID}
                        mute = {this.state.robots[i].mute}
                        voiceChange = {this.state.robots[i].voiceChange}
                        admin = {this.state.admin}
                        speakerIndex = {this.speakerIndex}
                        />
                    )
                })
            }
        </div>)
    }
}

export default CardList;