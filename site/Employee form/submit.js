(function() {
        
    var form= document.getElementByld('login ' );     
   
   addEvent(form,'submit',function(e)
   {
   e.preventDefault();
   var elements= this.elements;
   
  
   var username = elements.username.value;
   
   var msg = 'Welcome ' + username; 
   document.getElementByld('main').textContent = msg;
   } ) ;
   } ());