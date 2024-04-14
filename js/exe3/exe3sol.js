function submitFeedback(emoji) {
    const feedback = prompt("Enter your feedback:");
    if (feedback) {
        const feedbackItem = document.createElement("div");
        feedbackItem.textContent = `${emoji} - ${feedback}`;
        document.getElementById("feedbackList").appendChild(feedbackItem);
        alert("Thank you for your feedback!");
    } else {
        alert("Please enter your feedback.");
    }
}
