import { createBrowserHistory } from 'history';

import config from 'config';

export default createBrowserHistory({ basename: config.basename });
