function drawShape() {
    const shapeSelect = document.getElementById('shapeSelect');
    const colorInput = document.getElementById('colorInput');
    const canvasContainer = document.getElementById('canvasContainer');
    
    const shape = shapeSelect.value;
    const color = colorInput.value;

    // Clear previous shapes
    canvasContainer.innerHTML = '';

    if (shape === 'circle') {
        const circle = document.createElement('div');
        circle.className = 'shape circle';
        circle.style.backgroundColor = color;
        circle.style.width = '100px';
        circle.style.height = '100px';
        circle.style.borderRadius = '50%';
        positionShape(circle);
        canvasContainer.appendChild(circle);
    } else if (shape === 'square') {
        const square = document.createElement('div');
        square.className = 'shape square';
        square.style.backgroundColor = color;
        square.style.width = '100px';
        square.style.height = '100px';
        positionShape(square);
        canvasContainer.appendChild(square);
    } else if (shape === 'triangle') {
        const triangle = document.createElement('div');
        triangle.className = 'shape triangle';
        triangle.style.backgroundColor = color;
        triangle.style.width = '0';
        triangle.style.height = '0';
        triangle.style.borderLeft = '50px solid transparent';
        triangle.style.borderRight = '50px solid transparent';
        triangle.style.borderBottom = '100px solid ' + color;
        positionShape(triangle);
        canvasContainer.appendChild(triangle);
    } else {
        alert("Please select a shape!");
    }
}

function positionShape(shape) {
    const canvasContainer = document.getElementById('canvasContainer');
    const maxX = canvasContainer.clientWidth - 100; // Subtract shape width
    const maxY = canvasContainer.clientHeight - 100; // Subtract shape height
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    shape.style.left = `${x}px`;
    shape.style.top = `${y}px`;
}
