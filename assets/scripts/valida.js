
    const formulario = document.querySelector('[data-form]');
    const campos = document.querySelectorAll('[data-input]');
    const spans = document.querySelectorAll('.span_required');
    const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    function exibeError(index) {
        campos[index].style.border = '0.5px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removerError(index) {
        campos[index].style.border = '';
        spans[index].style.display = 'none';
    }

    function validaNome() {
        if(campos[0].value.length < 3) {
            exibeError(0);
        }
        else {
            removerError(0);
        }
    }  


    function validaEmail() {
        if(!emailRegx.test(campos[1].value)) {
            exibeError(1);
        }else {
            removerError(1);
        }
    }

    function validaAssunto() {
        if(campos[2].value.length < 10) {
            exibeError(2);
        }
        else {
            removerError(2);
        }
    }

    function validaMensagem() {
        if(campos[3].value.length < 25) {
            exibeError(3);
        }
        else {
            removerError(3);
        }
    }

        
    
