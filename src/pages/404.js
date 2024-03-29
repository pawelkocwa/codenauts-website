import * as React from "react"
import SecondaryBtn from '../components/buttons/secondary-btn';
import Layout from '../components/layout/layout';
import { graphql } from 'gatsby';

const mainCtn = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
}

const NotFoundPage = () => {
  return (
    <Layout
      isMenu={false}
      isFooter={false}
      title={'404 🤔'}
      description={'Page Not Found'}
      canonicalLink={'/404'}
    >
      <div className="ctn" style={mainCtn}>
        <span>🤔</span>
        <h1>404</h1>
        <SecondaryBtn to="/" text='Go home'/>.
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
