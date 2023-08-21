import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'm6x5ko6c',
  dataset: 'production',
  useCdn: true, 
});