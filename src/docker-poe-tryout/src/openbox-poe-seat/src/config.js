require('dotenv').config();

const path = require('path');

const { myLogger } = require('./utils/myLogger');

const SRC_ROOT = path.resolve(__dirname);
const UTILS_ROOT = path.resolve([SRC_ROOT, 'utils'].join('/'));
const PROMPT_ROOT = path.resolve([SRC_ROOT, 'prompt'].join('/'));
const ERROR_ROOT = path.resolve([SRC_ROOT, 'error'].join('/'));
const ROUTES_ROOT = path.resolve([SRC_ROOT, 'routes'].join('/'));
const WORKER_ROOT = path.resolve([SRC_ROOT, 'worker'].join('/'));

const DEFAULT_DATA_DIR = 'default_data_dir';

const {
  FLOW_HANDLER_ENDPOINT,
  API_DEBUG_ENDPOINT,
  BAIT_ENDPOINT,
  DBAPI_ENDPOINT,
  DIFF_HANDLER_ENDPOINT,
  JOBSDB_LINK_EXTRACTOR_ENDPOINT,
  PAGE_HANDLER_ENDPOINT,
  POE_SCHEDULER_API_ENDPOINT,
  OPENBOX_POE_SEAT1_ENDPOINT,
  OPENBOX_POE_SEAT2_ENDPOINT,
  CHROME_DATA_DIR,
  CANONICAL_HOSTNAME,
  DEFAULT_ASK_ACCOUNT,
} = process.env;

if (!CANONICAL_HOSTNAME) {
  myLogger.error('CANONICAL_HOSTNAME not defined !!');
  throw new Error('CANONICAL_HOSTNAME not defined !!');
}

if (!DBAPI_ENDPOINT) {
  myLogger.error('DBAPI_ENDPOINT not defined !!');
  throw new Error('DBAPI_ENDPOINT not defined !!');
}

if (!CHROME_DATA_DIR) {
  console.log('chrome data dir not set, default to /tmp');
  CHROME_DATA_DIR = '/tmp/chrome-data-dir';
}

if (!DEFAULT_ASK_ACCOUNT) {
  console.log('default ask account not set, quitting');
  process.exit();
} else {
  console.log('using default ask account ' + DEFAULT_ASK_ACCOUNT);
}

module.exports = {
  SRC_ROOT,
  UTILS_ROOT,
  PROMPT_ROOT,
  ERROR_ROOT,
  ROUTES_ROOT,
  WORKER_ROOT,

  FLOW_HANDLER_ENDPOINT,
  API_DEBUG_ENDPOINT,
  BAIT_ENDPOINT,
  DBAPI_ENDPOINT,
  DIFF_HANDLER_ENDPOINT,
  JOBSDB_LINK_EXTRACTOR_ENDPOINT,
  PAGE_HANDLER_ENDPOINT,
  POE_SCHEDULER_API_ENDPOINT,
  OPENBOX_POE_SEAT1_ENDPOINT,
  OPENBOX_POE_SEAT2_ENDPOINT,

  CANONICAL_HOSTNAME,

  DEFAULT_ASK_ACCOUNT,

  CHROME_DATA_DIR,
  DEFAULT_DATA_DIR,
};
