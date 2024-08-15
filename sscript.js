
let qtext = document.getElementById('qtext');
let qimg = document.getElementById('qrimg');

function showqr() {
    qrimg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qtext.value;
   
          }

function resetqr() {
    document.getElementById('form').reset();
    qrimg.src="";
                  }          
