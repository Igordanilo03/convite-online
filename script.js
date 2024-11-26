document.addEventListener('DOMContentLoaded', () => {
    const initialPage = document.getElementById('initialPage');
    const optionsPage = document.getElementById('optionsPage');
    const convincePage = document.getElementById('convincePage');
    const activities = document.querySelectorAll('.activity-card');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const convinceYes = document.getElementById('convinceYes');
    const convinceNo = document.getElementById('convinceNo');
    const calendarDiv = document.getElementById('calendar');
    const confirmDate = document.getElementById('confirmDate');
    let selectedActivity;

    flatpickr('#flatpickr', {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        theme: "dark",
    });

    yesButton.addEventListener('click', () => {
        initialPage.style.display = 'none';
        optionsPage.style.display = 'block';
    });

    noButton.addEventListener('click', () => {
        initialPage.style.display = 'none';
        convincePage.style.display = 'block';
    });

    activities.forEach(activity => {
        activity.addEventListener('click', (e) => {
            selectedActivity = e.target.dataset.activity || e.target.parentElement.dataset.activity;
            activities.forEach(a => a.style.backgroundColor = '');
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            calendarDiv.style.display = 'block';
            confirmDate.style.display = 'block';
        });
    });

    let aviso = "Obs: Eu ainda não adicionei o banco de dados para salvar, a resposta, pode me falar no whats"

    confirmDate.addEventListener('click', () => {
        let selectedDate = document.getElementById('flatpickr').value;
        if (selectedDate && selectedActivity) {
            confirmDate.classList.add('confirmed');
            setTimeout(() => {
                confirmDate.classList.remove('confirmed');
            }, 300);
            alert(`Encontro Confirmado!\n\nLocal: ${selectedActivity}\nData e Hora: ${selectedDate},\n ${aviso}`);
            console.log(`Activity: ${selectedActivity}, Date: ${selectedDate}\n ${aviso} `);
        } else {
            alert('Por favor, selecione uma atividade e uma data.');
        }
    });

    yesButton.addEventListener('click', () => {
        initialPage.style.display = 'none';
        optionsPage.style.display = 'block';
    });

    noButton.addEventListener('click', () => {
        initialPage.style.display = 'none';
        convincePage.style.display = 'block';
    });

    convinceYes.addEventListener('click', () => {
        convincePage.style.display = 'none';
        optionsPage.style.display = 'block';
    });

    convinceNo.addEventListener('click', () => {
        convincePage.style.display = 'none';
        initialPage.style.display = 'block';
    });
});