function initMap() {
    const uluru = { lat: 34.045798, lng: -118.239594 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  function bootcampRegistration(){
    prompt("Enter Name:","Rohan");
    prompt("Enter Email ID:","rohan@gmail.com");
    alert("Registration Successful!");
}
function subscribe(){
    alert("Thanks! for Subscribing");
}
function contact(){
    alert("W'll contact you soon...");
}
function enroll(){
    prompt("Enter your Email ID:")
    alert("Registration form has been sent to you. Please check your Inbox...");
}