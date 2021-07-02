//id: rendered-js
var c = document.getElementById("rendered-js");

var design = anime({
    targets: 'svg #XMLID5',
    keyframes: [
    { translateX: -500 },
    { rotateY: 180 },
    { translateX: 920 },
    { rotateY: 0 },
    { translateX: -500 },
    { rotateY: 180 },
    { translateX: -500 }],
    
    easing: 'easeInOutSine',
    duration: 60000 });
    
    
    anime({
    targets: '#dust-paarticle path',
    translateY: [10, -150],
    direction: 'alternate',
    loop: true,
    delay: function (el, i, l) {
      return i * 100;
    },
    endDelay: function (el, i, l) {
      return (l - i) * 100;
    } });
    //# sourceURL=pen.js
    
    
    //Form JS Code
            function myFunction() {
            var x = document.getElementById('mydiv1');
          if (x.style.display === 'none') {
            x.style.display = 'block';
          } else {
            x.style.display = 'none';
          }
          var y = document.getElementById('mydiv2');
          if (y.style.display === 'none') {
            y.style.display = 'block';
          } else {
            y.style.display = 'none';
          }
            }
          function parentfunction(val){
             console.log(val)
             childname=document.getElementById('childname');
             childmail=document.getElementById('childemail');
             if (val==='parent'){
                
                console.log(childname)
                console.log(childmail)
                childname.style.display='block';
                childmail.style.display='block';
    
             }
             else{
                console.log(childname)
                console.log(childmail)
                childname.style.display='none';
                childmail.style.display='none';
             }
    
          }
            // Disable form submissions if there are invalid fields
            (function() {
              'use strict';
              window.addEventListener('load', function() {
                // Get the forms we want to add validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function(form) {
                  form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                  }, false);
                });
              }, false);
            })();