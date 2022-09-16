import { createClient } from 'urql';

export const client = createClient({
  url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:4000/graphql',
});