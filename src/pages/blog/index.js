import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/cornfield-sunset.jpg')`,
            height: "500px",
            objectFit: "contain",
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
            Publicaciones
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
