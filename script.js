// JavaScript for Sidebar Toggle
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.navbar__s4');

    toggleButton.addEventListener('click', () => {
        // Toggle sidebar visibility
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-250px'; // Hide sidebar
        } else {
            sidebar.style.left = '0px'; // Show sidebar
        }
    });
});

