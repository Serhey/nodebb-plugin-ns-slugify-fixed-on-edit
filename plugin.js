/**
 * Created by Nicolas on 6/19/15.
 */
/**
*  Modified by Dreadfull on 8/09/17
*/
(function (Plugin) {
    'use strict';

    var translit = require('translitit-cyrillic-russian-to-latin');

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: {
            categoryCreate: function (categoryData, callback) {
                categoryData.category.slug = translit(categoryData.category.slug);
                callback(null, categoryData);
            },

            categoryUpdate: function (categoryData, callback) {
                if ('slug' in categoryData.category) {
                    categoryData.category.slug = translit(categoryData.category.slug);
                }
                callback(null, categoryData);
            },

            topicCreate: function (topicData, callback) {
                topicData.topic.slug = translit(topicData.topic.slug);
                callback(null, topicData);
            },

            topicEdit: function (topicData, callback) {
                //Here was a problem
                topicData.topic.slug = translit(topicData.topic.slug);
                callback(null, topicData);
            },

            userCreate: function (userData, callback) {
                //If there will be username collision, userslug will be overridden by NodeBB...
                userData.userslug = translit(userData.userslug);
                callback(null, userData);
            }
        }
    };

})(module.exports);
