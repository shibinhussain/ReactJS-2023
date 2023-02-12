import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query Characters {
    characters {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query Episodes {
    episodes {
      info {
        count
        pages
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
