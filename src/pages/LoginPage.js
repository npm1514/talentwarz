import React, { Component } from 'react';
import { Header, Footer } from '../components';
import { LoginContent } from '../styled-components/pages/login';
import { PageWrapper, ContentWrapper } from '../styled-components/global';

import categories from '../data/categories';

class Login extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <ContentWrapper>
                <LoginContent>
                  You are a Guest!
                  {
                    categories.map((b, i) => {
                      return (
                        <a key={i} href={b.link}><button>{b.name}</button></a>
                      )
                    })
                  }
                </LoginContent>
              </ContentWrapper>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Login;
