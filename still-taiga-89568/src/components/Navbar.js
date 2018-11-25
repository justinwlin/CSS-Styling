import React, { Component } from 'react';

import { Layout, Header, Navigation, Drawer, Content, List, ListItem, ListItemContent } from 'react-mdl';

class Navbar extends Component {
    render() {
      return (
        <div style={{height: '100px', position: 'relative'}}>
        <Layout>
            <Header transparent title="Session" style={{color: '#cad66f', fontFamily: 'Avenir'}}>
                <Navigation>
                    <a style={{color: 'black', fontFamily: 'Avenir'}} >My Sessions</a>
                    <a style={{color: 'black'}} >Messages</a>
                    <a style={{color: 'black'}} >Notification</a>
                    <List>
                   <ListItem>
    <ListItemContent avatar="person"></ListItemContent>
  </ListItem></List>
  
                </Navigation>
            </Header>
            <Drawer title="Session" style={{color: '#cad66f'}}>
                <Navigation>
                    <a  style={{color: 'black'}}>My Session</a>
                    <a  style={{color: 'black'}}>Messages</a>
                    <a  style={{color: 'black'}}>notifcation</a>
                  
                   
                </Navigation>
            </Drawer>
            <Content />
        </Layout>
    </div>
      );
    }
}

export default Navbar;

