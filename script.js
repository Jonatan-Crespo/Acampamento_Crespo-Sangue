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
        const dataForm = ['Nome:', 'Sobrenome:', 'E-mail:', 'Chalé:', 'Qual sua família:', 'Conteúdo quer aprender:', 'Avaliação:', 'Comentário:']
        const allInputs = document.querySelectorAll('.inputs');
        for (let i = 0; i < allInputs.length; i += 1) {
            const element = allInputs[i];
            if (dataForm[i] === 'Qual sua família:') {
                openModal(`${dataForm[i]} ${valueRadioTec()}`);
            } else if (dataForm[i] === 'Conteúdo quer aprender:') {
                openModal(`${dataForm[i]} ${checkboxLearning()}`);
            } else if (dataForm[i] === 'Avaliação:') {
                openModal(`${dataForm[i]} ${valueNPS()}`);
            } else {
                openModal(`${dataForm[i]} ${element.value}`);
            }
        }

    })

    // Função para retornar o valor do radio tecnologia
    function valueRadioTec() {
        const radio = document.getElementsByName('tec');
        let valorRadio;
        for (let i = 0; i < radio.length; i += 1) {
            if (radio[i].checked) {
                valorRadio = radio[i].value;
                break;
            }
        }
        return valorRadio;
    }

    // Função para retornar os valores do checkbox
    function checkboxLearning() {
        const checkbox = document.getElementsByName('checkboxGroup');
        let valueCheckbox = [];
        for (let i = 0; i < checkbox.length; i += 1) {
            if (checkbox[i].checked) {
                valueCheckbox.push(checkbox[i].value);
            }
        }
        return valueCheckbox;
    }

    // Função para retornar o valor do NPS
    function valueNPS() {
        const radioNPS = document.getElementsByName('radionps');
        let valorRadioNPS;
        for (let i = 0; i < radioNPS.length; i += 1) {
            if (radioNPS[i].checked) {
                valorRadioNPS = radioNPS[i].value;
                break;
            }
        }
        return valorRadioNPS;
    }

    // Função para modal de resultado aparecer
    const modal = document.getElementById('simpleModal');

    function openModal(inputValue) {
        const lista = document.getElementById('resultado');
        const conteudo = document.createElement('li');
        conteudo.innerText = inputValue;
        lista.appendChild(conteudo);
        modal.style.display = 'block';
    }

    // Função para fechar o modal no icone X
    function closeModal() {
        const close = document.getElementById('closeBtn');
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            location.reload();

        })
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
                location.reload();
            }
        })
    }
    closeModal();
}




