/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Note: This is a fork of the fb-specific transform.js
 */
'use strict';

const transformer = require('./node_modules/react-native/packager/transformer');

function transform(src, filename, options) {
    console.log(filename);
    if (filename.indexOf('/build/') > -1){
        console.log("NOT TRANSFORMING: " + filename);
        return { code: src
                 };
    };
    return transformer.transform(src, filename, options);
}

module.exports = function(data, callback) {
  let result;
  try {
    result = transform(data.sourceCode, data.filename, data.options);
  } catch (e) {
    callback(e);
    return;
  }

  callback(null, result);
};

// export for use in jest
module.exports.transform = transform;
