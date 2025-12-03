$(document).ready(function () {
    $("#registrationForm").submit(function (e) {
        e.preventDefault();

        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            dob: $("#dob").val(),
            gender: $("#gender").val(),
            college: $("#college").val(),
            department: $("#department").val(),
            semester: $("#semester").val(),
            usn: $("#usn").val()
        };

        // Save data temporarily
        localStorage.setItem("formData", JSON.stringify(formData));

        // Redirect to output page
        window.location.href = "result.html";
    });
});