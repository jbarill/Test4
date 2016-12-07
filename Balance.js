var myObj =  {
       myName: 'Juan',
       favouriteDrink: "Coffee"
};
   function checkGivenProperty (myObj, favouriteDrink){

       return Object.prototype.hasOwnProperty.call(myObj, favouriteDrink );

   }

if (checkGivenProperty(myObj, 'favouriteDrink')) {true}
else {false}
