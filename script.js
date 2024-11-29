document.getElementById('temperatureForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
  
    let result;
  
    if (fromUnit === toUnit) {
      result = inputValue;
    } else if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        result = (inputValue * 9/5) + 32;
      } else if (toUnit === 'kelvin') {
        result = inputValue + 273.15;
      }
    } else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        result = (inputValue - 32) * 5/9;
      } else if (toUnit === 'kelvin') {
        result = ((inputValue - 32) * 5/9) + 273.15;
      }
    } else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        result = inputValue - 273.15;
      } else if (toUnit === 'fahrenheit') {
        result = ((inputValue - 273.15) * 9/5) + 32;
      }
    }
  
    document.getElementById('result').textContent = `Výsledek: ${result.toFixed(2)} ${toUnit === 'celsius' ? '°C' : toUnit === 'fahrenheit' ? '°F' : 'K'}`;
  });
  