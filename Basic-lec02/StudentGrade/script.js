document.getElementById('gradeForm').addEventListener('submit', (e) =>{
    e.preventDefault();

    // Get marks from inputs
    const hindi = Number(document.getElementById('hindi').value);
    const english = Number(document.getElementById('english').value);
    const sst = Number(document.getElementById('sst').value);
    const science = Number(document.getElementById('science').value);
    const maths = Number(document.getElementById('maths').value);

    // Calculate total and percentage
    const total = hindi + english + sst + science + maths;
    const percentage = total / 5;

    // Determine grade
    let grade = '';
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Show result
    document.getElementById('result').innerHTML = `
        <strong>Total Marks:</strong> ${total}/500 <br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}% <br>
        <strong>Grade:</strong> ${grade}
    `;
});