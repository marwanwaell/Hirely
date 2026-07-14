


function selectRole(role) {
    const seekerBox = document.getElementById('seeker');
    const employerBox = document.getElementById('employer');

    seekerBox.classList.remove('active');
    employerBox.classList.remove('active');

    if (role === 'seeker') {
        seekerBox.classList.add('active');
    } else {
        employerBox.classList.add('active');
    }
}



function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleText = document.getElementById("toggleText");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleText.innerHTML = "Hide";
    } else {
        passwordInput.type = "password";
        toggleText.innerHTML = "Show";
    }
}




// Part 1: Handles the visual color change when you click a role box
function selectRole(role) {
    const seekerBox = document.getElementById('seeker');
    const employerBox = document.getElementById('employer');

    // Remove the 'active' class from both to reset colors
    seekerBox.classList.remove('active');
    employerBox.classList.remove('active');

    // Add the 'active' class to the one that was clicked
    if (role === 'seeker') {
        seekerBox.classList.add('active');
    } else {
        employerBox.classList.add('active');
    }
}


function handleLogin() {
    const employerBox = document.getElementById('employer');
    if (employerBox.classList.contains('active')) {
        window.location.href = "employerdashboard.html";
    } else {
        window.location.href = "jobseeker.html";
    }
}


