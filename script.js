// Dados fictícios para o gráfico de linha
const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
        label: 'Vendas',
        data: [5000, 7000, 4000, 8000, 6000, 9000], // Valores fictícios, substitua pelos seus dados reais
        borderColor: '#007BFF',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2
    }]
};

// Configuração do gráfico
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

// Criando o gráfico
const ctx = document.getElementById('sales-chart').getContext('2d');
new Chart(ctx, config);
