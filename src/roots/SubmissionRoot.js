import React, { Component } from 'react';
import { SubmissionPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <SubmissionPage data={data ? data : {}}/>
    }
}

export default Root;