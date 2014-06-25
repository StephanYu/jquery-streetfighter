$(document).ready(function() {
  intro();
  playGame();
});
  var flag = false;
  function playGame() {
    $('.ryu').mouseenter(function() {
      $('.ryu-current').hide();
      $('.ryu-ready').show();
    })
    .mouseleave(function() {
      $('.ryu-current').hide();
      $('.ryu-still').show();
    })
    .mousedown(function() {
      playHadouken();
      flag = true;
      $('.ryu-current').hide();
      $('.ryu-throwing').show();
      $('.hadouken').finish().show()
      
      
      .animate(
        {'left': '300px'},
        500,
        function() {
          $(this).hide();
          $(this).css('left', '-212px');
        }
      );
    })
    .mouseup(function() {
      $('.ryu-current').hide();
      $('.ryu-ready').show();
      flag = false;
    });
  
    $(document).keydown(function(event) {
      if (event.which == 88 && flag) {
        $('.ryu-current').hide();
        $('.ryu-throwing').show();
      }

      else if (event.which == 88) {
        playCool();
        $('.ryu-current').hide();
        $('.ryu-cool').show();
      }
    })
    .keyup(function(event) {
      if (event.which == 88) {
        $('#cool-sound')[0].pause();
        $('#cool-sound')[0].load();
        $('.ryu-current').hide();
        $('.ryu-still').show();
      }
    });
  }

  function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

  function intro () {
    $('#sf-theme-song')[0].volume = 0.5; 
    $('#sf-theme-song')[0].load();
    $('#sf-theme-song')[0].play();
    $('#sf-logo').fadeIn(3000, function() {
      $(this).fadeOut(5000, function() {
        $('#capcom-logo').fadeIn(3000, function() {
          $(this).fadeOut(4000, function() {
            $('#text1').fadeIn(2000, function() {
              $('#text2').fadeIn(2000);
            })
          })
        })
      })
    })
  }

  var coolSound = false; 
  function playCool () {
    coolSound = !coolSound;
    if (coolSound) {
      $('#sf-theme-song')[0].pause();
      $('#cool-sound')[0].play();
    }
  }

  