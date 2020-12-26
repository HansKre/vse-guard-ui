const isDEV = document.location.hostname === 'localhost' || document.location.hostname.startsWith('192.168.');
const BASE_URL = isDEV ? '' : 'https://...';

const Config = { BASE_URL, isDEV };

export default Config;