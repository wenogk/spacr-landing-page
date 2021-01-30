function sendEmail() {
    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let dest = document.getElementById("inputDestination").value;

    if(!validateEmail(email)) {
      document.getElementById("submitButton").innerText = "Invalid email" 
      document.getElementById("submitButton").style.backgroundColor = "#F08080"
      setTimeout(function () {
        document.getElementById("submitButton").innerText = "Submit" 
         document.getElementById("submitButton").style.backgroundColor = "#48c4dd"
    }, 2600);
    return;
    }
    document.getElementById("loaderHolder").style.display = "block"
    document.getElementById("submitButton").style.display = "none"
    //
    //48c4dd
    
    axios.post('http://spacr-env.eba-kwkym6hq.ap-south-1.elasticbeanstalk.com/landingEndpoint/', {
        name: name,
        email: email,
        destination: dest
      })
      .then((response) => {
        document.getElementById("loaderHolder").style.display = "none"
        document.getElementById("submitButton").style.display = "block"
        document.getElementById("submitButton").innerText = "Email sent!"
        //#cefdce - C8C8C8
        document.getElementById("submitButton").style.backgroundColor = "#48c4dd"
        document.getElementById("submitButton").disabled = true;
      }, (error) => {
        console.log(error);
        document.getElementById("loaderHolder").style.display = "none"
        document.getElementById("submitButton").style.display = "block"
      });
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}