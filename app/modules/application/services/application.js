/**
 * Created with JetBrains WebStorm.
 * User: @kazaff
 * Date: 13-10-8
 * Time: ����2:59
 */
define([
    'config'
], function(config){
    'use strict';

    return ['$resource', function($resource){
        return $resource(config.domain + 'application/:aid/:page', {}, {
            query: {
                method: 'GET'
                , params: {aid: 0}
                , isArray: false
            }
            , changStatus: {
                method: 'POST'
                , params: {aid: 'onlyStatus'}
            }
            , create: {
                method: 'PUT'
            }
            , update: {
                method: 'POST'
                , params: {aid: 'update'}
            }
        });
    }];
});