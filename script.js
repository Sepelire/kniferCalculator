const lengthNumber = document.getElementById('length-number');
const lengthRange = document.getElementById('length-range');

lengthRange.addEventListener('input', function() {
    lengthNumber.value = lengthRange.value;
});

lengthNumber.addEventListener('input', function() {
    lengthRange.value = lengthNumber.value;
});

