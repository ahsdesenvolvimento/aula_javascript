    const buttonElement = document.getElementById('resultadoMensagem');
    buttonElement.addEventListener('click', function(){
       num = document.getElementById('numeroInput').value 
       if(num == null){
        alert("Digite um valor válido")
       }
       if(num>10){ 
            buttonElement.classList.add('button-green')
            alert('número maior que 10')
             
       } else {
            buttonElement.classList.remove('button-green')
            buttonElement.classList.add('button-red')
            alert('número menor que 10')
       }
    });