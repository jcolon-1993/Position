$(function()
{
  /* Cache the window and advert */
  var $window = $(window);
  var $slideAd = $("#slideAd");
  // The height of the end zone is calculated
  var endZone = $("#footer").offset().top - $window.height() - 500;

  /* The scroll event triggers an
  anonymous function every time
  the user scrolls up or down */
  $window.on("scroll", function()
  {
    /* A conditional statement
    checks if the user's position is
    further from the top of the page
    than the start of the end zone */
    if( (endZone) < $window.scrollTop() )
    {

      /*  It the condition returns true,
      the box slides in from the righthand edge of the page. This
      takes 250 milliseconds. */
      $slideAd.animate({ "right": "0px" }, 250);
    }
    else
    {
      /* If the condition is false or the
      box is in the middle of animating,
      it is stopped using the .stop()
      method */
      $slideAd.stop(true).animate( { "right": "-360px" }, 250 );
    }
  });

});
