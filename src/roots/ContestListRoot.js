import React, { Component } from 'react';
import { ContestListPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <ContestListPage data={data ? data : {}}/>
    }
}

export default Root;
