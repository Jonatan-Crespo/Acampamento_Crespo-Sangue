//Lista dos Chalés
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
    function createSelectChales(data) {
        const selectChale = document.getElementById('selectChale');
        for (let i = 0; i < data.items.length; i += 1) {
            const newChale = document.createElement('option');
            newChale.innerText = data.items[i];
            selectChale.appendChild(newChale);
        }
    }
    createSelectChales(nomesChales);


    //Habilitar o botão de enviar
    document.getElementById('button').disabled = true;

    function enabledButton() {
        const checkbox = document.getElementById('agree');
        checkbox.addEventListener('click', () => {
            const checkboxAgree = checkbox.checked;
            if (checkboxAgree) {
                document.getElementById('button').disabled = false;
            } else {
                document.getElementById('button').disabled = true;
            }
        });
    };
    enabledButton();

    // Enviar os dados preenchidos
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const email = document.getElementById('email').value;
        const chale = document.getElementById('selectChale').value;
        const coment = document.getElementById('floatingTextarea2').value;
        const agreeCheck = document.getElementById('agree').checked;

        // Pegar valor RadioTec
        function valueRadioTec() {
            const radio = document.getElementsByName('tec');
            let valorRadio;
            for (let i = 0; i < radio.length; i += 1) {
                if (radio[i].checked) {
                    valorRadio = radio[i].value;
                    break;
                }
            }
            console.log(valorRadio);
        }

        // Pegar os valores do checkbox
        function checkboxLearning(){
            const checkbox = document.getElementsByName('checkboxGroup');
            let valueCheckbox = [];
            for(let i = 0; i < checkbox.length; i+=1){
                if(checkbox[i].checked){
                    valueCheckbox.push(checkbox[i].value);
                }
            }
            console.log(valueCheckbox);
        }

        // Pegar valor NPS
        function valueNPS() {
            const radioNPS = document.getElementsByName('radionps');
            let valorRadioNPS;
            for (let i = 0; i < radioNPS.length; i += 1) {
                if (radioNPS[i].checked) {
                    valorRadioNPS = radioNPS[i].value;
                    break;
                }
            }
            console.log(valorRadioNPS);
        }
        

        valueRadioTec();
        valueNPS();
        checkboxLearning();
        console.log(nome, sobrenome, email, chale);
        console.log(coment);
        console.log(agreeCheck);
    })

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




