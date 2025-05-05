document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page on submit

    // Show SweetAlert popup on successful form submission
    Swal.fire({
        title: 'Success!',
        text: 'Your feedback has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Clear form fields after submission (optional)
    document.getElementById('feedbackForm').reset();
});



// SweetAlert configuration
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show SweetAlert
    Swal.fire({
        title: 'Congratulations!',
        text: 'Your feedback has been submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            // Reset the form
            document.getElementById('feedbackForm').reset();
            // Optionally, you can reload the page
            // location.reload(); // Uncomment this line if you want to reload the page
        }
    });
});