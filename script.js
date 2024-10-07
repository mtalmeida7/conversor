// Função para validar a entrada de temperatura
function validateInput() {
    let temperature = document.getElementById('temperature').value;
    if (isNaN(temperature) || temperature === "") {
        document.getElementById('result').innerText = 'Por favor, insira um valor válido!';
        return false;
    }
    return true;
}

// Função para converter Fahrenheit para Celsius
function convertToCelsius() {
    if (!validateInput()) return; // Valida a entrada antes de prosseguir

    let temperature = parseFloat(document.getElementById('temperature').value);
    const celsius = (temperature - 32) * (5 / 9); // Conversão de Fahrenheit para Celsius
    document.getElementById('result').innerText = `Resultado: ${celsius.toFixed(2)} °C`;

    // Atualiza o termômetro com a temperatura convertida em Celsius, mas mantém o valor original em °F no rótulo
    updateThermometer(celsius, 'C', `${temperature.toFixed(2)} °F`);
}

// Função para converter Celsius para Fahrenheit
function convertToFahrenheit() {
    if (!validateInput()) return; // Valida a entrada antes de prosseguir

    let temperature = parseFloat(document.getElementById('temperature').value);
    const fahrenheit = (temperature * (9 / 5)) + 32; // Conversão de Celsius para Fahrenheit
    document.getElementById('result').innerText = `Resultado: ${fahrenheit.toFixed(2)} °F`;

    // Atualiza o termômetro com a temperatura original em Celsius, mas mantém o valor original em °C no rótulo
    updateThermometer(temperature, 'F', `${temperature.toFixed(2)} °C`);
}

// Atualiza o termômetro conforme a temperatura convertida e mostra a temperatura original no rótulo
function updateThermometer(temp, unit, originalValue) {
    const minTemp = -30;  // Temperatura mínima exibida no termômetro
    const maxTemp = 50;   // Temperatura máxima exibida no termômetro

    // Limita a temperatura dentro dos valores mínimo e máximo
    const limitedTemp = Math.max(minTemp, Math.min(temp, maxTemp));

    // Calcula a altura do preenchimento do termômetro em porcentagem
    const percentage = ((limitedTemp - minTemp) / (maxTemp - minTemp)) * 100;

    // Atualiza o preenchimento do termômetro
    const fill = document.getElementById('thermometer-fill');
    fill.style.height = percentage + '%';

    // Atualiza o rótulo de temperatura com o valor original inserido pelo usuário (em °C ou °F)
    document.querySelector('.temperature-label').innerText = originalValue;
}
