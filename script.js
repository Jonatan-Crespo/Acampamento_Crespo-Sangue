//JSON
const nomesChales = {
    items: [
        'Selecione seu chalé',
        'Chalé 01 - Zeus',
        'Chalé 02 - Hera',
        'Chalé 03 - Poseidon',
        'Chalé 04 - Deméter',
        'Chalé 05 - Ares',
        'Chalé 06 - Atena',
        'Chalé 07 - Apolo',
        'Chalé 08 - Ártemis',
        'Chalé 09 - Hefesto',
        'Chalé 10 - Afrodite',
        'Chalé 11 - Hermes',
        'Chalé 12 - Hades'
    ]
}

window.onload = () => {
    // Puxar as opções do chalé do objeto nomeChales
    const selectChale = document.getElementById('selectChale');
    function createSelectChales() {
        for (let i = 0; i < nomesChales.items.length; i += 1) {
            const newChale = document.createElement('option');
            newChale.innerText = nomesChales.items[i];
            selectChale.appendChild(newChale);
        }
    }
    createSelectChales();


    //Habilitar o botão de enviar
    document.getElementById('button').disabled = true;

    function enabledButton() {
        const checkbox = document.getElementById('agree');
        checkbox.addEventListener('click', () => {
            const checkboxAgree = checkbox.checked;
            if (checkboxAgree) {
                document.getElementById('button').disabled = false;
            }else{
                document.getElementById('button').disabled = true;
            }
            // console.log(checkboxAgree);
        });
    };
    enabledButton();




    // // Evento de submeter o formulário
    // const pullForm = getElementById('formulario');
    // pullForm.addEventListener('submit', (event) => {
    //     alert('Arroz');
    // });

    // function getValueForm(inputValue) {
    //     const valueInput = document.createElement('li');
    //     valueInput.innerText = inputValue;
    //     textsInput.appendChild(valueInput);

    // };

    // function findChale() {
    //     let chale;
    //     for (let i = 0; i < nomesChales.items.length; i += 0) {
    //         if (selectChale.value === nomesChales.items[i]) {
    //             chale = nomesChales.items[i];
    //         }
    //     }

    // }

}




