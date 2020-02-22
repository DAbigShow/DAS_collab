import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaEarlybirds } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
// import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["react", "nodejs", "html", "css"]
    const tags = {}
    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i>D Abig Show isch e open source gschicht wo jede cha mitmache.
                            Mir brichtet über alles mögliche ohni gross e eigene Meinig z bringe.
                            Jede Text wird irgendwenn mit Witz versetzt und denn Filmemer de shit und stelleds uf YT.</i></p>
                        <br />
                        <h4>Ziele</h4>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaEarlybirds size={26} style={{ color: "danger" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Open Source & Independence Reporting ...</p>
                        </div>
                        {/* <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaEarlybirds size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Mööööp</p>
                            <div className="ml-5">
                                <TechTag tag="react" tech="React" name={tags["react"]} size={20} color="deepskyblue" />
                                <TechTag tag="nodejs" tech="Node.js" name={tags["nodejs"]} size={20} color="lightgreen" />
                                <TechTag tag="html" tech="HTML" name={tags["html"]} size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name={tags["css"]} size={20} color="teal" />
                            </div>  
                        </div> */}
                        <div className="mt-4">
                            <span className="text-success d-inline-block" title="prism">
                                <FaEarlybirds size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">S söll witzig + informativ sie </p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="icons">
                                <FaEarlybirds size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Ihr lerned was über Blockchain </p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="mobile">
                                <FaEarlybirds size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Peer review macht din schribstil besser </p>
                        </div>
                    </div>
                    <br></br>

                    <p> Aleitig wie n post chasch dezue tue heds uf GitHub </p>

                    <br></br>
                    <p>S hed e telegram gruppe & n discord server wo mer cha mit enand schribe</p>

                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech 
                    name 
                    size 
                    color
                }
            }
        }
    }
`

export default AboutPage

