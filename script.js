// Adicionando interatividade com JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const marmitas = document.querySelectorAll('.marmita');

    marmitas.forEach(marmita => {
        marmita.addEventListener('click', () => {
            alert('Você clicou em uma marmita saudável!');
        });
    });
});
