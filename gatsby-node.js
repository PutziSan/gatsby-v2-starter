const path = require(`path`);
const slash = require(`slash`);

function throwIfError(error) {
  if (error) {
    throw new Error(error);
  }
}

async function createWpPages({ graphql, actions }) {
  const {
    error,
    data: { allWordpressPage },
  } = await graphql(
    `
      {
        allWordpressPage {
          edges {
            node {
              id
              slug
              status
              template
            }
          }
        }
      }
    `
  );

  if (error) {
    throw new Error(error);
  }

  const pageTemplate = path.join(__dirname, 'src/templates/page.js');

  allWordpressPage.edges.forEach(edge => {
    actions.createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
}

async function createWpPosts({ graphql, actions }) {
  const {
    error,
    data: { allWordpressPost },
  } = await graphql(
    `
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
              template
              format
            }
          }
        }
      }
    `
  );

  if (error) {
    throw new Error(error);
  }

  const postTemplate = path.resolve('./src/templates/post.js');

  allWordpressPost.edges.forEach(edge => {
    actions.createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
}

exports.createPages = async gatsbyProps => {
  await createWpPages(gatsbyProps);
  await createWpPosts(gatsbyProps);
};
