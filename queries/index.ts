export const GetFirstThreeShows = gql`
  query GetFirstThreeShows {
    shows(first: 3) {
      title
      description
      link
      image {
        url
      }
    }
  }
`

export const GetFirstFourFeaturedPosts = gql`
  query GetFirstFourFeaturedPosts {
    posts(
      first: 4
      stage: PUBLISHED
      orderBy: date_DESC
      where: { featured: true }
    ) {
      title
      slug
    }
  }
`

export const GetFirstSevenPostsPreview = gql`
  query GetFirstSevenPostsPreview {
    posts(first: 7, orderBy: date_DESC) {
      title
      slug
      image {
        url
      }
      date
      description
      category {
        name
        slug
      }
      author {
        name
        slug
      }
    }
  }
`

export const GetAllAuthors = gql`
  query GetAllAuthors {
    authors {
      name
      slug
      description
      avatar {
        url
      }
    }
  }
`

export const GetPostBySlug = gql`
  query GetPostBySlug($slug: String) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        description
        name
        slug
      }
      category {
        name
        slug
      }
      content {
        html
      }
      title
      date
      description
      image {
        url
      }
    }
  }
`

export const GetPostsWithPagination = gql`
  query GetPostsWithPagination($first: Int, $skip: Int) {
    posts(first: $first, skip: $skip, orderBy: date_DESC) {
      title
      slug
      image {
        url
      }
      date
      description
      category {
        name
        slug
      }
      author {
        name
        slug
      }
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`

export const GetPostsByAuthorWithPagination = gql`
  query GetPostsByAuthor($author: String, $first: Int, $skip: Int) {
    posts(
      first: $first
      skip: $skip
      orderBy: date_DESC
      where: { author: { slug: $author } }
    ) {
      title
      slug
      image {
        url
      }
      date
      description
      category {
        name
        slug
      }
      author {
        name
        slug
      }
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`
