let value ; 

try {
    // code may cause exceptions
    console.log(value);

  } catch (error) {

    console.log(error.message);
    // code to handle exceptions
  } finally {
    console.log('sa');
    // code to execute whether exceptions occur or not
  }
