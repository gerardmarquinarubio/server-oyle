'use strict';

const { getAuth } = require('firebase-admin/auth');

const auth = getAuth();

module.exports = auth;