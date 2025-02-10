// JavaScript File for Basic Interactions

// Show alert when adding an employee
document.addEventListener("DOMContentLoaded", function() {
    let addEmployeeBtn = document.querySelector(".btn-success");
    if (addEmployeeBtn) {
        addEmployeeBtn.addEventListener("click", function() {
            alert("Feature to add an employee will be implemented!");
        });
    }
});

// Confirmation before removing an employee
let removeButtons = document.querySelectorAll(".btn-danger");
removeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        let confirmDelete = confirm("Are you sure you want to remove this employee?");
        if (confirmDelete) {
            alert("Employee removed successfully.");
        }
    });
});

// Simulate login (Redirect to Dashboard)
document.addEventListener("DOMContentLoaded", function() {
    let loginForm = document.querySelector("form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "dashboard.html";
        });
    }
});
