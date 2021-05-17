import React, { Component } from 'react';
import { JudgmentPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <JudgmentPage data={data ? data : {}}/>
    }
}

export default Root;