
// bussiness logic
function convertInputs(inputTime){
    this.inputTime=inputTime;
    this.convertedHours=Math.floor(inputTime/60);
      this.convertedToMinutes = Math.floor(inputTime%60);
    alert (  convertedHours + " HRS" + convertedToMinutes + " MINS");
    }


$(document).ready(function() {

    var indexx = $('.forClass')
    var totalPrice = 0;
    
    // console.log(indexx, indexColumn)
    for (var i = 0; i < indexx.length; i++) {
        $('#servButton1').click(function () {
            var pprice = $('#price1')[0].innerText
            var ttime = $('#time1')[0].innerText

            $('.pOutput').append(pprice)
            $(".tOutput").append(ttime)
            console.log(pprice, ttime)
        })
        $('#servButton2').click(function () {
            var ppprice = $('#price2')[0].innerText
            var tttime = $('#time2')[0].innerText
            $('.tOutput').append(tttime)
            $('.pOutput').append(ppprice)
            // $(".tOutput").append(tttime)
            console.log(ppprice, tttime)
        })
        $('#servButton3').click(function () {
            var pprice = $('#price3')[0].innerText
            var ttime = $('#time3')[0].innerText
            $('.pOutput').append(pprice)
            $(".tOutput").append(ttime)
            console.log(pprice, ttime)
        })

    }



    $('.image-gallery').hover( function() {
        $(this).find('.image-txt').fadeIn(300);
    }, function() {
        $(this).find('.image-txt').fadeOut(100);
    });
    $('.image-gallery').hover( function() {
        $(this).find('.image-txt1').fadeIn(300);
    }, function() {
        $(this).find('.image-txt1').fadeOut(100);
    });
    $("#car").click(function() {
      $(".platinum").fadeIn();
      $(".premium").hide();
      $(".gold").hide();
      $(".deluxe").hide();
    });
    $("#pick-up").click(function() {
      $(".platinum").hide();
      $(".deluxe").fadeIn("slow");
      $(".gold").hide();
      $(".premium").hide();

    });
    $("#minivan").click(function() {
      $(".platinum").hide();
      $(".premium").fadeIn("slow");
      $(".gold").hide();
      $(".deluxe").hide();
    });
    $("#van").click(function() {
      $(".platinum").hide();
      $(".premium").hide();
      $(".gold").fadeIn("slow");
      $(".deluxe").hide();
    });
  })

  //contact
  function myFunction() {
  var fname = $("#fname").value;
  var sname = $("#sname").value;
  var email = $("#email").value.indexOf("@");
  var phone = $("#phon").value;
  var make = $("#mak").value;
  var model = document.getElementById("model").value;
  var book = document.getElementById("book").value;

  var message = document.getElementById("message").value;

  if(fname=="" ){
    alert("Enter your first name!");
  }
  if(sname==""){
    alert("Enter your second name!");
  }
  if (email == -1) {
   alert("Not a valid e-mail!");
 }
 if(phone===""){
   alert("Enter phone number");
 }
 if (make == "" ) {
  alert("Enter make of your vehicle!");
}
if( model==""){
  alert("Enter the model of your vehicle!");
}
 if (book == "") {
  alert("Not a valid datetime!");
}
 if(message===""){
   alert("Enter message");
 }
if( fname!="" && sname!="" && email>-1 && message!="" && phon!="" && make!="" && model!="" && book!=""){
   alert( fname  +  sname + " we have received your message.Your booking of  "  + " " + book  + " is scheduled.");
 }
}

//gallery hover    
