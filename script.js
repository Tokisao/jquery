$(document).ready(function () {
  console.log("jQuery is ready!");
  // Tag selector
  $("h2").css("letter-spacing", "0.5px");

  // ID selector
  $("#greeting").text("Hello, visitor! Welcome to my portfolio.");

  // Class selector
  $(".headline").css("color", "#a29bfe");

  // Update greeting dynamically
  $("#update-greeting").on("click", function () {
    const newGreeting =
      "👋 Thanks for visiting, " +
      (Math.random() > 0.5 ? "friend" : "developer") +
      "!";
    $("#greeting").html("<i>" + newGreeting + "</i>");
  });

  // Theme switcher
  $("#theme-btn").on("click", function () {
    $("body").toggleClass("dark");
    const isDark = $("body").hasClass("dark");
    $(this).text(isDark ? "☀️ Switch Theme" : "🌙 Switch Theme");
  });

  $("#hide-btn").on("click", function () {
    $("#status-message").hide();
  });

  $("#show-btn").on("click", function () {
    $("#status-message").show();
  });

  $("#toggle-btn").on("click", function () {
    $("#status-message").toggle();
  });

  $("#fade-in-btn").on("click", function () {
    $(".gallery-img").fadeIn(600);
  });

  $("#fade-out-btn").on("click", function () {
    $(".gallery-img").fadeOut(600);
  });

  $("#fade-toggle-btn").on("click", function () {
    $(".gallery-img").fadeToggle(600);
  });

  $(".slide-heading").on("click", function () {
    $(this).next(".slide-panel").slideToggle(400);
  });

  function getSkillValue() {
    return $("#skill-input").val().trim();
  }

  $("#add-skill").on("click", function () {
    const skill = getSkillValue();
    if (!skill) return alert("Please enter a skill!");
    $("#skills-list").append("<li>" + skill + "</li>");
    $("#skill-input").val("");
  });

  $("#prepend-skill").on("click", function () {
    const skill = getSkillValue();
    if (!skill) return alert("Please enter a skill!");
    $("#skills-list").prepend("<li>" + skill + "</li>");
    $("#skill-input").val("");
  });

  $("#remove-skill").on("click", function () {
    $("#skills-list li").last().remove();
  });

  let isGithub = true;
  $("#change-link-btn").on("click", function () {
    if (isGithub) {
      $("#social-link").attr("href", "https://linkedin.com").text("LinkedIn");
    } else {
      $("#social-link").attr("href", "https://github.com/Tokisao").text("GitHub");
    }
    isGithub = !isGithub;
  });

  $("#contact-form input").on("input", function () {
    const name = $("#name-input").val();
    const email = $("#email-input").val();
    $("#live-preview").text("Name: " + name + " | Email: " + email);
  });

  let animated = false;
  $("#animate-btn").on("click", function () {
    if (!animated) {
      $(".fill").each(function () {
        const target = $(this).data("width");
        $(this).animate({ width: target }, 1000);
      });
      animated = true;
    } else {
      $(".fill").animate({ width: "0%" }, 1000);
      animated = false;
    }
  });
});