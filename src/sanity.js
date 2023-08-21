import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'xywquhuz',
  dataset: 'production',
  useCdn: true
});

export default client;
