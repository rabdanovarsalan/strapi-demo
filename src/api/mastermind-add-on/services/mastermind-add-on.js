'use strict';

/**
 * mastermind-add-on service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mastermind-add-on.mastermind-add-on');
