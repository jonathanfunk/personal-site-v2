const path = require("path")
const _ = require("lodash")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/project.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")

  const res = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              title
            }
          }
        }
      }
    }
  `)

  const projects = res.data.allMarkdownRemark.edges

  //Create Project Details
  projects.map((project, index) => {
    const prev = index === 0 ? null : projects[index - 1].node
    const next = index === projects.length - 1 ? null : projects[index + 1].node
    createPage({
      component: projectTemplate,
      path: `/${project.node.fields.slug}`,
      context: {
        slug: project.node.fields.slug,
        prev,
        next,
      },
    })
  })

  //Create Tag Pages
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  _.each(projects, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}
