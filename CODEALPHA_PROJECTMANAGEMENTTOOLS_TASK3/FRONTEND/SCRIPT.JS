document.addEventListener("DOMContentLoaded", () => {
    const createProjectBtn = document.getElementById("createProjectBtn");

    // Example event listener for your main CTA button
    if (createProjectBtn) {
        createProjectBtn.addEventListener("click", () => {
            alert("Project creation setup triggered!");
            // You can add modal display or redirection logic here
        });
    }

    // Attach click events to all feature card buttons dynamically
    const cardButtons = document.querySelectorAll(".card-btn");
    cardButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const actionType = e.target.innerText;
            console.log(`Action initiated: ${actionType}`);
            // Route to your specific logic/pages based on actionType
        });
    });
});