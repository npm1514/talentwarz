import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { JudgmentContent } from '../styled-components/pages/judgment';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import contestList from '../data/contests';
import submissionList from '../data/submissions';

class Judgment extends Component {
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
                <JudgmentContent>
                  <h1>Which One Is Better?</h1>
                  {
                    contest && contest.title &&
                    <div>
                      <a href={`/submission/${contest.title.toLowerCase().split(" ").join("-")}`}><button>Make Your Own Submission</button></a>
                      <h2>{contest.title}</h2>
                      <h3>Description: {contest.description}</h3>
                      <h3>Judgment Criteria: {contest.judgmentrules}</h3>
                    </div>
                  }
                  {
                    submissionList && submissionList.length &&
                    <div>
                      <span onClick={() => {alert("You chose the one on the left")}}><img src={submissionList[0].img}/></span>
                      <span onClick={() => {alert("You chose the one on the right")}}><img src={submissionList[1].img}/></span>
                    </div>
                  }
                </JudgmentContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Judgment;
