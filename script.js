//JSON
const nomesChales = {
    items: [
        'Selecione seu chalé',
        'Chalé 01 - GitZeus',
        'Chalé 02 - GitZeus',
        'Chalé 03 - GitZeus',
        'Chalé 04 - GitZeus',
        'Chalé 05 - GitZeus',
        'Chalé 06 - GitZeus',
        'Chalé 07 - GitZeus',
        'Chalé 08 - GitZeus',
        'Chalé 09 - GitZeus',
        'Chalé 10 - GitZeus',
        'Chalé 11 - GitZeus',
        'Chalé 12 - GitZeus'
    ]
}

window.onload = () => {
    // Puxar as opções do chalé do objeto nomeChales
    function createSelectChales() {
        const chales = document.getElementById('selectChale');
        for (let i = 0; i < nomesChales.items.length; i += 1) {
            const newChale = document.createElement('option');
            newChale.innerText = nomesChales.items[i];
            chales.appendChild(newChale);
        }
    }

    createSelectChales();
}