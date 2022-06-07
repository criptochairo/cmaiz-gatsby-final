import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import ref1 from '../img/produce2.jpg';
import ref2 from '../img/prueba.jpg';
import ref3 from '../img/pala2.jpg';
import ref4 from '../img/scale2.jpg';


// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {

  return (
    <div>
      <div
          className="full-width-image-container margin-top-0"
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* <img src={logo} alt="#" style={{width: "15rem", height: "auto", borderRadius: "15px", marginBottom: "1rem" }}/> */}
          <h1
            className="has-text-weight-bold"
            style={{
              boxShadow: "0.5rem 0 0 rgba(252, 189, 16, 0.90), -0.5rem 0 0 rgba(252, 189, 16, 0.90)",
              backgroundColor: "rgba(252, 189, 16, 0.90)",
              color: "white",
              padding: "0.15em",
              borderRadius: ".25rem",
              fontSize: "3.5em",
              marginBottom: "0.75em",
              textShadow: "1px 1px 2px black"
            }}
          >
            Cmaíz
          </h1>
          <h3
            className="has-text-weight-bold is-size-3"
            style={{
              boxShadow: "0.5rem 0 0 rgba(252, 189, 16, 0.90), -0.5rem 0 0 rgba(252, 189, 16, 0.90)",
              backgroundColor: "rgba(252, 189, 16, 0.90)",
              color: "white",
              padding: "0.25em",
              borderRadius: ".25rem",
              fontSize: "3em",
              textShadow: "1px 1px 2px black"
            }}
          >
            Rescatando a nuestras tierras
          </h3>
        </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title" style={{marginTop: "-2.5em"}}>{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    {/* <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div> */}
                  </div>

                  <div className="columns">
                    <div className="column is-6">
                      <div className="ref-container content">
                      <div className="">
                        <img src={ref1} alt="#" className="column is-12" />
                        <Link to="/about" className="has-text-centered"><h3 style={{color: "#008037"}}>Acerca de Nosotros</h3></Link>
                        <p className="is-size-5 has-text-left" style={{paddingLeft: "10px"}}>Fundada en 2019, Cmaiz es una empresa 100% mexicana basada en la Ciudad de México. Actualmente, operamos en la Alcaldía Iztapalapa y sus alrededores proveyendo a cientos de tiendas y restaurantes con producto fresco todos los días.</p>
                      </div>
                        
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="ref-container content">
                      <div className="">
                        <img src={ref2} alt="#" className="column is-12" />
                        <Link to="/about" className="has-text-centered"><h3 style={{color: "#008037"}}>Nuestros Productos</h3></Link>
                        <p className="is-size-5 has-text-left" style={{paddingLeft: "10px"}}>Nuestras tortillas y totopos son 100% orgánicos y libres de conservadores, resultando en un producto más nutritivo y de mejor sabor que nuestra competencia.</p>
                      </div>
                        
                      </div>
                    </div>
                      
                    </div>
                      <div className="columns">
                      <div className="column is-6">
                      <div className="ref-container content">
                      <div className="">
                        <img src={ref3} alt="#" className="column is-12" />
                        <Link to="/about" className="has-text-centered"><h3 style={{color: "#008037"}}>Procesos Artesanales</h3></Link>
                        <p className="is-size-5 has-text-left" style={{paddingLeft: "10px"}}>Nixtamalizamos el maíz en nuestras instalaciones todos los días a través de un proceso tradicional utilizando maquinaria de tipo artesanal.</p>
                      </div>
                        
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="ref-container content">
                      <div className="">
                        <img src={ref4} alt="#" className="column is-12" />
                        <Link to="/about" className="has-text-centered"><h3 style={{color: "#008037"}}>Nuestros Clientes</h3></Link>
                        <p className="is-size-5 has-text-left" style={{paddingLeft: "10px"}}>Actualmente vendemos al mayoreo y al minoreo a restaurantes, supermercados y misceláneas de todo tipo.</p>
                      </div>
                        
                      </div>
                    </div>
                  </div>

                  <br /><br />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        Ver nuestros productos
                      </Link>
                    </div>
                  </div>
                  <br />
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Publicaciones
                    </h3>
                    <BlogRoll />
                    <br /><br />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Leer más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
      }
    }
  }
`;
