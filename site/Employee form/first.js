    var today= new Date();
    var hourNow = today.getHours() ;
    var greeting;
    if (hourNow > 18) 
    {
        greeting= 'Good evening!!';
    }
    else if (hourNow > 12)
    {
        greeting= 'Good afternoon!!';
    }
    else if (hourNow > O) 
    {
        greeting= 'Good morning!!';
    }

    else 
    {
        greeting = 'Welcome';
    }
    document.write(greeting) ;
    var username;
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