module.exports = {


  friendlyName: 'Get single employee',


  description: '',


  inputs: {
    id:{type:"number" , required:true},
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    var employe = await Employee.findOne({
      id : inputs.id,
    });
    // All done.
    return exits.success(employe);

  }


};
