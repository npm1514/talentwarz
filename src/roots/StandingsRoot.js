import React, { Component } from 'react';
import { StandingsPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <StandingsPage data={data ? data : {}}/>
    }
}

export default Root;