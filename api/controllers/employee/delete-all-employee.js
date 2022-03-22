

module.exports = {


  friendlyName: 'Delete all employee',


  description: '',


  inputs: {
    id:{type:"number" , required:true},

  },


  exits: {

  },


  fn: async function (inputs,exits) {
    var distroiedRec = await Employee.destroyOne({
      id : inputs.id
    });
    // All done.
   return exits.success({status:true});

  }


};
