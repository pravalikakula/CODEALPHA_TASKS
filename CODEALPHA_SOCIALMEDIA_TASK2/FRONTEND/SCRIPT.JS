// Global Application Operational Verification Event Hook Initializers
document.addEventListener("DOMContentLoaded", () => {
    // 1. Sync logged-in user profiles details into the DOM layout dynamically
    const savedUser = localStorage.getItem("activeSessionUser");
    const profileNode = document.getElementById("profileName");
    if (profileNode) {
        profileNode.innerText = savedUser ? savedUser : "Alex Pravalika";
    }

    // 2. Intercept Login Submissions Actions Layout Routing Triggers
    const loginForm = document.getElementById("loginFormAction");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const fieldVal = document.getElementById("loginUserField").value.trim();
            localStorage.setItem("activeSessionUser", fieldVal || "Alex Pravalika");
            window.location.href = "INDEX.HTML"; // Programmatic file routing redirection
        });
    }

    // 3. Intercept Registration Signups Submissions Redirection Layers
    const registerForm = document.getElementById("registerFormAction");
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Account registered successfully! Directing to verification login...");
            window.location.href = "LOGIN.HTML";
        });
    }

    // 4. Bind Creator Button Node Events
    const postBtn = document.getElementById("submitPostBtn");
    if (postBtn) {
        postBtn.addEventListener("click", executePostPublishRoutine);
    }
});

/* ==========================================================================
   INTERACTIVE REACTION COMPONENT ENGINES
   ========================================================================== */

// Publishing stream append list loop routine handler
function executePostPublishRoutine() {
    const inputArea = document.getElementById("postInput");
    const feedWrapper = document.getElementById("newsFeedWrapper");
    const activeAuthor = localStorage.getItem("activeSessionUser") || "Alex Pravalika";

    if (!inputArea.value.trim()) {
        alert("The post description text area field cannot be empty!");
        return;
    }

    // Generate dynamic post block mockup layout
    const generatedPostCard = document.createElement("div");
    generatedPostCard.className = "post-card";
    generatedPostCard.innerHTML = `
        <div class="post-header">
            <div class="mini-avatar">${activeAuthor.substring(0, 2).toUpperCase()}</div>
            <div class="post-meta">
                <h4>${activeAuthor}</h4>
                <span>Just now • Public</span>
            </div>
        </div>
        <div class="post-content">
            ${inputArea.value}
        </div>
        <div class="post-interaction-metrics">
            <button class="metric-btn" onclick="toggleLikeEffect(this)">❤️ Like (<span class="like-count">0</span>)</button>
            <button class="metric-btn" onclick="focusCommentInput(this)">💬 Comment</button>
            <button class="metric-btn" onclick="handleActionClick('Post Share')">🔄 Share</button>
        </div>
        <div class="comments-box">
            <div class="comment-input-wrapper">
                <input type="text" placeholder="Write a reply comment..." onkeypress="addCommentOnEnter(event, this)">
            </div>
        </div>
    `;

    // Prepend new element block to feed timeline list structure
    feedWrapper.insertBefore(generatedPostCard, feedWrapper.firstChild);
    inputArea.value = "";
}

// Like counter increment framework handler
function toggleLikeEffect(btnNode) {
    const tracker = btnNode.querySelector(".like-count");
    let currentScore = parseInt(tracker.innerText);

    if (btnNode.classList.contains("liked")) {
        btnNode.classList.remove("liked");
        tracker.innerText = currentScore - 1;
    } else {
        btnNode.classList.add("liked");
        tracker.innerText = currentScore + 1;
    }
}

// Inline comment submission input listener appending loop
function addCommentOnEnter(event, inputElement) {
    if (event.key === "Enter" && inputElement.value.trim() !== "") {
        const boxContainer = inputElement.closest(".comments-box");
        
        const addedCommentRow = document.createElement("div");
        addedCommentRow.className = "comment-row";
        addedCommentRow.innerHTML = `<strong>You:</strong> ${inputElement.value.trim()}`;
        
        boxContainer.insertBefore(addedCommentRow, inputElement.parentNode);
        inputElement.value = "";
    }
}

// Redirect focus straight into comment typing field
function focusCommentInput(btnNode) {
    const postCard = btnNode.closest(".post-card");
    const targetInput = postCard.querySelector(".comment-input-wrapper input");
    if (targetInput) targetInput.focus();
}

// Interface Action Feature Event Trackers
function handleMenuClick(menuElement) {
    const items = document.querySelectorAll(".menu-item");
    items.forEach(el => el.classList.remove("active"));
    menuElement.classList.add("active");
    console.log(`Switched view channel category filter section to: ${menuElement.innerText}`);
}

function viewStory(userName) {
    alert(`Loading interactive fullscreen dynamic stories asset viewport for user profile node: [ ${userName} ]`);
}

function handleTrendClick(trendHashtag) {
    alert(`Filtering search stream timelines database query for topic index string parameter: ${trendHashtag}`);
}

function handleActionClick(actionType) {
    alert(`Triggering system interface event action logic block pipeline module: "${actionType}"`);
}

function triggerLogOutAction() {
    if (confirm("Are you sure you want to log out of your session timeline?")) {
        localStorage.removeItem("activeSessionUser");
        window.location.href = "LOGIN.HTML";
    }
}