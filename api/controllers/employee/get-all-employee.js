
module.exports = {


  friendlyName: 'Get all employee',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (input,exits) {
    var employees = await Employee.find().populate("depId");
    // All done.
   // var all_total = 0;

   var all_total = await Employee.sum('amount');
    return exits.success({employees:employees,all_total:all_total});

  }


};
