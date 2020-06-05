/* ******************************************************************************
 * IBM Confidential
 *
 * OCO Source Materials
 *
 *  Copyright IBM Corp. 2017  All Rights Reserved.
 *
 * The source code for this program is not published or otherwise divested
 * of its trade secrets, irrespective of what has been deposited with
 * the U.S. Copyright Office.
 ****************************************************************************** */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import './App.js'
import ngoview from "./ngo_view";

export default (
    <div>
        <Route path={`/`} component={App} />

        <Route path={`/ngoview`} component={ngoview} />
    </div>


);
