
module.exports = {


  friendlyName: 'Update employee',


  description: '',


  inputs: {
    id:{type:"number" , required:true},
    name:{type:"string",required:false},
    email:{type:"string",required:false},
    phone:{type:"string",required:false},
    amount:{type:"string",required:false},
    discAmount:{type:"string",required:false},
    discType:{type:"string",required:false}
 
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    inputs.amount,
    inputs.discAmount,
    inputs.discType

    var finalAmount = 0;

    if(inputs.discType == "Amount"){
        finalAmount =inputs.amount - inputs.discAmount;
    }else if(inputs.discType == "Persentage"){
      var discount = (inputs.amount * inputs.discAmount) / 100;
      finalAmount = inputs.amount - discount;
    }

    

    var updatedEmp = await Employee.updateOne({
      id:inputs.id
    }).set({
      name:inputs.name,
      email:inputs.email,
      phone:inputs.phone,
      amount:inputs.amount,
      discAmount:inputs.discAmount,
      discType:inputs.discType,
      discountedAmount : finalAmount
    }).fetch();
    // All done.
    return exits.success({status:true,data:Employee})
  }


};
