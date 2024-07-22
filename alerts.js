function showAlert(type) {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        alert.classList.remove('hide');
        alert.style.display = 'none';
    });
    const alert = document.getElementById(`alert-${type}`);
    if (alert) {
        alert.style.display = 'flex';
        setTimeout(() => {
            alert.classList.add('hide');
            setTimeout(() => {
                alert.style.display = 'none';
            }, 500); // Match the CSS transition duration
        }, 3000); // Hide after 3 seconds
    }
}

document.getElementById('btn-info').addEventListener('click', () => showAlert('info'));
document.getElementById('btn-success').addEventListener('click', () => showAlert('success'));
document.getElementById('btn-warning').addEventListener('click', () => showAlert('warning'));
document.getElementById('btn-error').addEventListener('click', () => showAlert('error'));
