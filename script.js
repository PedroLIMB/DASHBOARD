const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
        label: 'Vendas',
        data: [5000, 7000, 4000, 8000, 6000, 9000],
        borderColor: '#007BFF',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2
    }]
};
<<<<<<< HEAD
=======

>>>>>>> 7658065e8a59c1cc0602c9a899d4f2b76c138316
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
<<<<<<< HEAD
=======

>>>>>>> 7658065e8a59c1cc0602c9a899d4f2b76c138316
const ctx = document.getElementById('sales-chart').getContext('2d');
new Chart(ctx, config);