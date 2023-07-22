    //const pageTitleElement =  document.getElementById('pageTitle');
    //console.log(pageTitleElement.textContent); 
        // Saída :"Titulo da Página"

    //const paragraphElement = document.getElementById('paragraph');
    //paragraphElement.textContent = 'Novo parágrafo';

    //const firstListItem =  document.querySelector('li');
    //console.log(firstListItem.textContent);
        // Saída: "Item 1"

    //const listItems = document.querySelectorAll('li');
    //listItems.forEach(item => console.log(item.textContent));
        // Saída: "Item 1", "Item 2", "Item 3"

    //const buttonElement = document.getElementById('btnClick');
    //console.log(buttonElement.getAttribute('id')); 
        // Saída: "btnClick"

    //buttonElement.setAttribute('disabled', true); 
        // Desabilita o botão
    
    //const pageTitleElement =  document.getElementById('pageTitle');
    //console.log(pageTitleElement.textContent);

    //pageTitleElement.classList.add('red')
        // Adiciona a class 'red'
        
    //pageTitleElement.classList.remove('red')
        // Remove a class 'red'

    //pageTitleElement.classList.add('green')
        // Adiciona a class 'green'

    //const listElement = document.getElementById('list');
    //listElement.innerHTML += '<li>Item 4</li>';
        // Adiciona um novo item à lista

    //const paragraphElement = document.getElementById('paragraph');
    //paragraphElement.innerHTML = '<strong> Texto em negrito</strong>';
        // Altera o conteúdo do parágrafo

    //const listElement = document.getElementById('list');
    //const newListItem = document.createElement('li');
    //newListItem.textContent = 'Item 5';
    //listElement.appendChild(newListItem); 
        // Adiciona um novo item à lista

    //const firstListItem = document.querySelector('li');
    //listElement.removeChild(firstListItem);
        // Remove o primeiro item da lista

    const buttonElement = document.getElementById('bntClick');
    buttonElement.addEventListener('click', function(){
        alert('Você clicou no botão!');
    });
    
