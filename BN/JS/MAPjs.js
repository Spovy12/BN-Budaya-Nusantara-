function hideIcons() {
  $(".visible").removeClass("visible");
}

$("#highways").click(function() {
  hideIcons();
  $(".highways").addClass("visible")
    // Animation complete.
});

$("#industry").click(function() {
  hideIcons();
  setTimeout(function() {
    $(".industrialsites").addClass("visible")
  }, 600);
  // Animation complete.
});
$("#airports").click(function() {
  hideIcons();
  $(".airports").addClass("visible");
  // Animation complete.
});
$("#recreation").click(function() {
  hideIcons();
  $(".recreation").addClass("visible");
  // Animation complete.
});
$("#entertainment").click(function() {
  hideIcons();
  $(".entertainment").addClass("visible");
  // Animation complete.
});
$("#employ").click(function() {
  hideIcons();
  $(".majoremployers").addClass("visible")
    // Animation complete.
});
$("#sea").click(function() {
  hideIcons();
  $(".seaports").addClass("visible")
    // Animation complete.
});