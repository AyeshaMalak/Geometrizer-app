document.getElementById('calculateBtn').addEventListener('click', function() {
    const radius = parseFloat(document.getElementById('radius').value);
    
    if (radius < 0 || isNaN(radius)) {
        alert("Please enter a valid radius.");
        return;
    }
    
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;
    
    document.getElementById('area').innerText = area.toFixed(2);
    document.getElementById('circumference').innerText = circumference.toFixed(2);
});
