/******************************************************************************
 *
 * Copyright (c) 2021, the exprtk.js Authors.
 *
 * This file is part of the exprtk.js library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

const rimraf = require("rimraf");

function rimraf_err(e) {
    if (e) {
        console.error(e.message);
        process.exit(1);
    }
}

rimraf("dist/", rimraf_err)
