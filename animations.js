$(function () {
  var size = $(window).width();
  $(window).on('resize', function () {
    var $screenSize = $(window).width();

    console.log("Storlek" + size);
  });

  function mouseHoverOverProject(projectId) {
    $(projectId).mouseenter(function () {
      var $projectDiv = $(projectId);
      $projectDiv.css("background-image", "none");
      $projectDiv.css("background-color", "teal");
      $projectDiv.children().removeClass("notVisible");
      $projectDiv.children().addClass("visible");
    });
  }

  function mouseLeavingProject(projectId, backgroundImage) {
    $(projectId).mouseleave(function () {
      console.log("MouseLeave");
      var $projectDiv = $(projectId);
      $projectDiv.css("background-image", backgroundImage);
      $projectDiv.css("background-color", "teal");
      $projectDiv.children().removeClass("visible");
      $projectDiv.children().addClass("notVisible");
    });
  }

  var $animatedHeaderForMain = $("#headerForMain");
  $animatedHeaderForMain.fadeIn(2750);

  var $animatedTextForMain = $("#textForMain");
  $animatedTextForMain.fadeIn(4550);

  var $animatedSubHeadingContact1 = $("#subHeadingContact");
  $animatedSubHeadingContact1.fadeIn(2750);

  var $animatedSubHeadingContact2 = $("#subHeadingContact2");
  $animatedSubHeadingContact2.fadeIn(4550);

  var $animatedBarMeterQuarter = $(".barMeterQuarter");
  $animatedBarMeterQuarter.animate({ width: "+=25%" }, 3000);

  var $animatedBarMeterHalf = $(".barMeterHalf");
  $animatedBarMeterHalf.animate({ width: "+=50%" }, 3000);

  var $animatedBarMeterFull = $(".barMeterFull");
  $animatedBarMeterFull.animate({ width: "+=95%" }, 3000);

  var $animatedOmOssHeading = $("#omOssHeading");
  $animatedOmOssHeading.animate({
    "marginLeft": "+=20%"
  }, 1000);

  var $animatedHeaderTextForPerson = $("#headertextForPerson");
  $animatedHeaderTextForPerson.animate({
    "marginLeft": "+=13%"
  }, 1000);

  var $animatedCenterOmOss = $(".centerOmOss");
  $animatedCenterOmOss.animate({
    "marginTop": "+=-15%"
  }, 1000);

  var $headerTextForKontakt = $("#headertextForKontakt");
  $headerTextForKontakt.animate({
    "marginLeft": "+=16%"
  }, 1000);

  var $mainOmOssContact = $("#mainOmOssContact");
  $mainOmOssContact.animate({
    "marginTop": "+=-4%"
  }, 1000);

  mouseLeavingProject("#sortingVisualizer", "url(sortingvisualizer.PNG)");

  mouseHoverOverProject("#sortingVisualizer");

  mouseLeavingProject("#interActiveDesign", "url(cykelApp.jpg");

  mouseHoverOverProject("#interActiveDesign");

  mouseLeavingProject("#sparKoll", "url(sparKollen.PNG)");

  mouseHoverOverProject("#sparKoll");

  mouseLeavingProject("#dataVisualizer", "url(dataVi.png)");

  mouseHoverOverProject("#dataVisualizer");

  mouseLeavingProject("#collision", "url(88412527-06457000-cdda-11ea-9f01-a69bc80b391c.png)");

  mouseHoverOverProject("#collision");

  mouseLeavingProject("#inDev", "url(inDevImg.jpg)");

  mouseHoverOverProject("#inDev", "#sortingVisualizer");
})