import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ContestContent } from '../styled-components/pages/contest';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import contestList from '../data/contests';

class Contest extends Component {
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
      let linkname = contest.title ? contest.title.toLowerCase().split(" ").join("-") : "";
      console.log("crash", linkname);
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <ContestContent>
                  {
                    contest && contest.title &&
                    <div>
                      <h1>{contest.title}</h1>
                      <h3>Description: {contest.description}</h3>
                      <h3>Judgment Criteria: {contest.judgmentrules}</h3>
                      <a href={`/judgment/${linkname}`}><button>Judge</button></a>
                      <a href={`/submission/${linkname}`}><button>Make A Submission</button></a>
                    </div>
                  }
                </ContestContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Contest;
