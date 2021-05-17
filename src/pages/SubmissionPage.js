import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { SubmissionContent } from '../styled-components/pages/submission';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import contestList from '../data/contests';

class Submission extends Component {
    constructor(props){
      super(props);
      this.state = {
        contest: ""
      }
    }
    componentDidMount(){
      let contest = contestList.find(a => a.title.toLowerCase().split(" ").join("-") == this.props.data.contest);
      this.setState({ contest })
    }
    render(){
      const { contest } = this.state;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <SubmissionContent>
                {
                  contest && contest.title &&
                  <div>
                    <h1>Make Your Best Submission Here</h1>
                    <a href={`/judgment/${contest.title.toLowerCase().split(" ").join("-")}`}><button type="text">Or Make a Judgment Instead</button></a>
                    <form onSubmit={() => {alert("Your entry has been submitted.")}}>
                      <h2>{contest.title}</h2>
                      <h3>Description: {contest.description}</h3>
                      <h3>Judgment Criteria: {contest.judgmentrules}</h3>
                      <input type="file"/>
                      <button type="submit">Enter Submission</button>
                    </form>
                  </div>
                }
                </SubmissionContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Submission;
