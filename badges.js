document.getElementById('notificationButton').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/feed/notifications';
});
  
document.getElementById("getStartedButton").addEventListener("click", function() {
    var badge = document.getElementById("badge");
    badge.textContent = "OK"; // Update the badge content

    var badge = document.getElementById("getStartedButton");
    badge.textContent = "Done"; // Update the badge content
    window.location.href = 'https://www.youtube.com/';
});