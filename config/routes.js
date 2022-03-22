/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

   'GET /api/v1/employee/get-all-employee': { action: 'employee/get-all-employee' },
   'GET /api/v1/employee/get-single-employee': { action: 'employee/get-single-employee' },
   'POST  /api/v1/employee/delete-all-employee': { action: 'employee/delete-all-employee' },
   'POST /api/v1/employee/update-employee': { action: 'employee/update-employee' },
   'POST /api/v1/employee/create-employee': { action: 'employee/create-employee' },
   
   

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
