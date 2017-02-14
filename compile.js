const path = require('path');
let appRoot = path.join(__dirname, '');

require('electron-compile').init(appRoot, './app/main/index');
require('electron-reload')(__dirname);