import { useQuery, gql } from '@apollo/client';
import { Images } from '@/types';

const GET_IMAGES = gql`
  query GetImages($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
        gender
       	created
      }
    }
  }
`;

export function useImages(page: number) {
    return useQuery<Images>(GET_IMAGES, {
        variables: { page },
        fetchPolicy: 'cache-first'
    })
}
