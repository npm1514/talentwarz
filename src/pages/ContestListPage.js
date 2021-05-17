import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { ContestListContent, ContestBlock } from '../styled-components/pages/contestlist';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import contestList from '../data/contests';
import categories from '../data/categories';

class ContestList extends Component {
    constructor(props){
      super(props);
      this.state = {
        contests: [],
        category: ""
      }
    }
    componentDidMount(){
      let category = categories.find(a => this.props.data.category == a.linkname).name;
      let contests = contestList.filter(a => category == a.category);
      this.setState({ contests, category })
    }
    render(){
      const { contests, category } = this.state;
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <ContestListContent>
                  <h1>{category}</h1>
                  {
                    contests.map((b,i) => {
                      return (
                        <a href={`/contest/${b.title.toLowerCase().split(" ").join("-")}`}><ContestBlock>
                          <h2>{b.title}</h2>
                          <p>{b.description}</p>
                        </ContestBlock></a>
                      )
                    })
                  }
                </ContestListContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default ContestList;
