// Smooth Scroll for navigation links //
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission //
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-status").innerText = "Thank you for your message!";
});


// function to fetch data from json file //

async function loadCounselingData() {
    try {
        const response = await fetch("data.json"); // Fetch JSON file
        const data = await response.json(); // Convert response to JSON

        const container = document.getElementById("counselingContainer");

        // Loop through data and create elements
        data.forEach(item => {
            const contentBox = document.createElement("div");
            contentBox.classList.add("content-box");

            const img = document.createElement("img");
            img.classList.add("box");
            img.src = item.image;
            img.alt = "Counseling Image";

            const paragraph = document.createElement("p");
            paragraph.textContent = item.text;

            // Append elements to content box
            contentBox.appendChild(img);
            contentBox.appendChild(paragraph);
            container.appendChild(contentBox);
        });
    } catch (error) {
        console.error("Error fetching the JSON file:", error);
    }
}

// Call function when page loads
window.onload = loadCounselingData;
