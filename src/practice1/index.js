import getUrl from './utils'
import {ADDRESS, PORT, PATH, REGION} from './constant'

const url = getUrl(ADDRESS, PORT, PATH, PATH);
const region = REGION;

export {url, region};