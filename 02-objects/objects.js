//-- Object literals ------------------------------------------------------

var cliffy = {
  breed: 'mutt',
  age: 5,
  isHungry: false,
  bark: function() {
    console.log('bark bark bark');
  }
};


//-- Object properties ----------------------------------------------------

cliffy['breed'];
cliffy.age;

cliffy['isFast'] = false;
cliffy.isNice = false;

delete cliffy.isNice;


//-- Object.create --------------------------------------------------------

var myObj = Object.create(null);