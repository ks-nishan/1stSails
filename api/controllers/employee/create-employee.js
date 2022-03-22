

module.exports = {


  friendlyName: 'Create employee',


  description: '',


  inputs: {
   // id:{type:"number" , required:true},
    name:{type:"string",required:true},
    email:{type:"string",required:true}, 
    phone:{type:"number",required:true},
    amount:{type:"number",required:true},
    discAmount:{type:"number",required:true},
    discType:{type:"string",required:true},
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    inputs.amount,
    inputs.discAmount,
    inputs.discType

    var finalAmount = 0;

    if(inputs.discType == "Amount"){
      finalAmount = inputs.amount - inputs.discAmount;
    }else if(inputs.discType == "Persentage"){
      var discount = (inputs.amount * inputs.discAmount) / 100;
      finalAmount = inputs.amount - discount;
    }

    var createdEmp = await Employee.create({
     // id:inputs.id,
      name:inputs.name,
      email:inputs.email, 
      phone:inputs.phone,
      amount:inputs.amount,
      discAmount:inputs.discAmount,
      discType:inputs.discType,
      discountedAmount : finalAmount
    }).fetch();
    // All done.
    //return exists.success({status:true});
    return exits.success({status:true,data:Employee})
  }


};
