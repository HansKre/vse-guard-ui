const isDEV = document.location.hostname === 'localhost' || document.location.hostname.startsWith('192.168.');
const BASE_URL = isDEV ? '' : 'https://...';
const GRAPHQL_URL = BASE_URL + '/graphql';
// const GRAPHQL_URL = 'https://graphql-weather-api.herokuapp.com/';

const Config = { BASE_URL, GRAPHQL_URL, isDEV };

export default Config;