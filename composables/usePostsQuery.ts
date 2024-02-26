import type { PostPreview } from "~/types"

interface GetPosts {
  posts: PostPreview[]
  postsConnection: {
    aggregate: {
      count: number
    }
  }
}

interface Args {
  query: any
  offset: number
}

export function usePostsQuery({ query, offset }: Args) {
  const skip = ref(0)
  const first = computed(() => offset)
  const canLoadMore = ref(true)

  const { result, fetchMore, loading } = useQuery<GetPosts>(query, {
    first: first.value,
    skip: 0,
  })

  const totalPosts = computed(() => {
    return result.value?.postsConnection?.aggregate?.count
  })

  function loadMore() {
    skip.value = skip.value + offset

    if (totalPosts.value && skip.value + offset >= totalPosts.value) {
      canLoadMore.value = false
    }

    fetchMore({
      variables: {
        first: first.value,
        skip: skip.value,
      },

      updateQuery: (previeousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previeousResult

        return {
          ...previeousResult,
          posts: [...previeousResult.posts, ...fetchMoreResult.posts],
        }
      },
    })
  }

  return { result, loading, canLoadMore, loadMore }
}
