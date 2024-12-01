// Function to add a new row in the education table
function addRow() {
    const table = document.getElementById("educationTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Create 4 new cells for the new row
    for (let i = 0; i < 4; i++) {
        const cell = newRow.insertCell(i);
        const input = document.createElement('input');
        switch (i) {
            case 0:
                input.type = "text";
                input.placeholder = "Enter Degree";
                break;
            case 1:
                input.type = "text";
                input.placeholder = "Enter University";
                break;
            case 2:
                input.type = "number";
                input.placeholder = "Enter Year";
                break;
            case 3:
                input.type = "number";
                input.placeholder = "Enter Percentage";
                input.step = "0.01";
                input.min = "0";
                input.max = "100";
                break;
        }
        cell.appendChild(input);
    }
}

// Function to submit the form and display the selected skills in a table
function submitSkillsForm(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Get the selected values from the dropdowns
    const technical = document.getElementById("technical").value;
    const communication = document.getElementById("communication").value;
    const aptitude = document.getElementById("aptitude").value;
    const others = document.getElementById("others").value;

    // Validate that the user has selected values
    if (!technical || !communication || !aptitude || !others) {
        alert("Please select all skills.");
        return;
    }

    // Prepare the table row with the selected data
    const tableBody = document.getElementById("submittedSkillsTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    // Insert new cells with the selected values
    newRow.insertCell(0).textContent = technical;
    newRow.insertCell(1).textContent = communication;
    newRow.insertCell(2).textContent = aptitude;
    newRow.insertCell(3).textContent = others;

    // Show the skills table and hide the form
    document.getElementById("skillsTableContainer").style.display = "block";

    // Optionally, hide the form if you don't want it to appear after submission
    // document.getElementById("skillsForm").style.display = "none";
}
// Function to submit the Course form and display the data in a table
// Function to submit the Course form and display the data in a table
function submitCourseForm() {
    const courseProvider = document.getElementById("courseProvider").value;
    const courseName = document.getElementById("courseName").value;
    const duration = document.getElementById("duration").value;
    const feedback = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 'No Feedback';

    // Validate input
    if (!courseProvider || !courseName || !duration) {
        alert("Please fill in all fields");
        return;
    }

    // Prepare the table row
    const tableBody = document.getElementById("submittedCoursesTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = courseProvider;
    newRow.insertCell(1).textContent = courseName;
    newRow.insertCell(2).textContent = duration;
    newRow.insertCell(3).textContent = feedback;

    // Show the table
    document.getElementById("coursesTableContainer").style.display = "block";
}

// Function to submit the Publication form and display the data in a table
function submitPublicationForm() {
    const publicationType = document.getElementById("publicationType").value;
    const publicationTitle = document.getElementById("publicationTitle").value;
    const publicationYear = document.getElementById("publicationYear").value;

    // Validate input
    if (!publicationTitle) {
        alert("Please enter a title for the publication");
        return;
    }

    // Prepare the table row
    const tableBody = document.getElementById("submittedPublicationsTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = publicationType;
    newRow.insertCell(1).textContent = publicationTitle;
    newRow.insertCell(2).textContent = publicationYear;

    // Show the table
    document.getElementById("publicationsTableContainer").style.display = "block";
}

// Function to submit the Onduty form and display the data in a table
function submitOndutyForm() {
    const ondutyType = document.getElementById("ondutyType").value;
    const clgName = document.getElementById("clgName").value;
    const monthYear = document.getElementById("monthYear").value;
    const role = document.getElementById("role").value;

    // Validate input
    if (!clgName || !monthYear) {
        alert("Please fill in all fields");
        return;
    }

    // Prepare the table row
    const tableBody = document.getElementById("submittedOndutyTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = ondutyType;
    newRow.insertCell(1).textContent = clgName;
    newRow.insertCell(2).textContent = monthYear;
    newRow.insertCell(3).textContent = role;

    // Show the table
    document.getElementById("ondutyTableContainer").style.display = "block";
}

// Function to submit the Sports form and display the data in a table
function submitSportsForm() {
    const category = document.getElementById("sportsCategory").value;
    const eventName = document.getElementById("sportsEventName").value;
    const monthYear = document.getElementById("sportsMonthYear").value;
    const role = document.getElementById("sportsRole").value;

    // Validate input
    if (!eventName || !monthYear) {
        alert("Please fill in all fields");
        return;
    }

    // Prepare the table row
    const tableBody = document.getElementById("submittedSportsTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = category;
    newRow.insertCell(1).textContent = eventName;
    newRow.insertCell(2).textContent = monthYear;
    newRow.insertCell(3).textContent = role;

    // Show the table
    document.getElementById("sportsTableContainer").style.display = "block";
}

// Function to submit the Certification form and display the cards
function submitCertificationForm() {
    const fileInput = document.getElementById("certificationUpload");
    const files = fileInput.files;

    // Validate input
    if (files.length === 0) {
        alert("Please upload at least one certificate");
        return;
    }

    const cardsContainer = document.getElementById("certificationCards");

    // Loop through each file and create a card
    Array.from(files).forEach(file => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.alt = file.name;

        const title = document.createElement("h4");
        title.textContent = file.name;

        card.appendChild(img);
        card.appendChild(title);
        cardsContainer.appendChild(card);
    });

    // Show the cards container
    document.getElementById("certificationCardsContainer").style.display = "block";
}

// Function to save the information
function saveOthers() {
    const otherInfo = document.getElementById("otherInfo").value;
    alert("Information Saved: " + otherInfo);
}

// Function to edit the information
function editOthers() {
    const otherInfo = document.getElementById("otherInfo");
    otherInfo.removeAttribute("readonly");
    alert("You can now edit the information");
}
