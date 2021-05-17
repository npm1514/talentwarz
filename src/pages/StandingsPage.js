import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { StandingsContent } from '../styled-components/pages/standings';
import { PageWrapper, ContentWrapper } from '../styled-components/global';
import submissionList from '../data/submissions'
import categoryList from '../data/categories'
import contestList from '../data/contests';

class Standings extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <StandingsContent>
                  <h1>Standings</h1>
                  {
                    categoryList.map((a, aindex) => {
                      return (
                        <div key={aindex}>
                          <h2>Category: {a.name}</h2>
                          {
                            contestList.filter(b => b.category == a.name).map((c, cindex) => {
                              let filteredSubmissions = submissionList.filter(d => d.category == a.name && d.contest == c.title);
                              return (
                                <div key={cindex}>
                                  <h3>Contest: {c.title}</h3>
                                  {
                                    filteredSubmissions && filteredSubmissions.length > 0 &&
                                    <table>
                                      <tr>
                                        <th>Name</th>
                                        <th>Votes</th>
                                      </tr>
                                    {
                                      filteredSubmissions.map((h, hindex) => {
                                        return (
                                          <tr key={hindex}>
                                            <td>{h.id}</td>
                                            <td>{h.votes}</td>
                                          </tr>
                                        )
                                      })
                                    }
                                    </table>
                                  }
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }
                </StandingsContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Standings;
