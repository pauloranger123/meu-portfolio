
 let controladorInputs = document.querySelector('[data-input]');
   
 controladorInputs.addEventListener("keypress", function(e) {
        var keyCode = (e.keyCode ? e.keyCode : e.wicth);
            //47 + ao  - 58 são números:
        
        if(keyCode > 47 && keyCode < 58) {
            e.preventDefault();
    
    }
})

        
    
