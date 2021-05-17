import React, { Component } from 'react';
import { Header } from '../styled-components/components/header';

class HeaderComponent extends Component {
  render(){
    return (
      <Header>
        <a href="/"><button>Home</button></a>
        <a href="/standings"><button>Standings</button></a>
      </Header>
    );
  }
}

export default HeaderComponent;
