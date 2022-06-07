import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/corn-closeup.jpg')`,
        objectFit: "cover",
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: "0.5rem 0 0 rgba(252, 189, 16, 0.90), -0.5rem 0 0 rgba(252, 189, 16, 0.90)",
          backgroundColor: "rgba(252, 189, 16, 0.90)",
          color: "white",
          padding: "0.15em",
          borderRadius: ".25rem",
          fontSize: "3.5em",
          marginBottom: "0",
          textShadow: "1px 1px 2px black"
        }}
      >
        Acerca de Nosotros
      </h1>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section" style={{marginTop: "-4em"}}>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
