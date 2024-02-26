// Author
export interface Author {
  __typename: string
  name: string
  slug: string
  description: string
  avatar: {
    __typename: string
    url: string
  }
}

// Post
export interface PostPreview {
  __typename: string
  title: string
  slug: string
  image: {
    __typename: string
    url: string
  }
  date: string
  description: string
  category: {
    __typename: string
    name: string
    slug: string
  }
  author: {
    __typename: string
    name: string
    slug: string
  }
}

export interface Post {
  __typename: string
  author: {
    __typename: string
    avatar: {
      __typename: string
      url: string
    }
    description: string
    name: string
    slug: string
  }
  category: {
    __typename: string
    name: string
    slug: string
  }
  content: {
    __typename: string
    html: string
  }
  title: string
  date: string
  description: string
  image: {
    __typename: string
    url: string
  }
}

export interface FeaturedPosts {
  posts: {
    __typename: string
    title: string
    slug: string
  }
}

export interface PostsWithPagination {
  posts: PostPreview[]
  postsConnection: {
    aggregate: {
      count: number
    }
  }
}

// Shows
export interface GetShows {
  shows: {
    title: string
    description: string
    link: string
    image: {
      url: string
    }
  }
}
