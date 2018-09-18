import Airtable from 'airtable';

Airtable.configure({
  ENDPOINTURL: 'https://api.airtable.com',
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
});

const table = Airtable.base('appd0f2sVUKlzdhPG');

export default table;
