document.addEventListener("DOMContentLoaded", function() {
    var welcomePlugin = document.getElementById("welcome-plugin");
    var closeBtn = document.getElementById("close-btn");
  
    closeBtn.addEventListener("click", function() {
      welcomePlugin.style.display = "none";
    });
  });
