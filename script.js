document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var phone = document.getElementById('phone').value;
    if (!/^\d{11}$/.test(phone)) {
        alert('Please enter a valid 11-digit phone number');
        return;
    }

    var department = document.getElementById('dept').value;
    if (department === "") {
        alert('Please select a department');
        return;
    }

    var formData = new FormData(this);

    fetch('https://formspree.io/f/xblrdpzk', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        if (data.ok) {
            // Form submission was successful, redirect to appropriate page
            if (department === 'Music Team') {
                window.location.href = 'music_team_info.html';
            } else if (department === 'Registration and Ushering') {
                window.location.href = 'ushering_info.html';
            } else if (department === 'Protocol') {
                window.location.href = 'protocol_info.html';
            } else if (department === 'Content Creators') {
                window.location.href = 'content_creators_info.html';
            } else if (department === 'Media') {
                window.location.href = 'media_info.html';
            } else {
                alert('Invalid Department');
            }
        } else {
            alert('There was an error submitting the form. Please try again.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
    });
});