$(document).ready(function() {
  $("#navBar").hide();
  $("#body").hide();
  $("#footer").hide();

  setTimeout(function() {
    $("#intro").hide();
    $("#navBar").show();
    $("#body").show();
    $("#footer").show();
  }, 1500);

  $(document).on('scroll', function() {
    if ($(document).scrollTop() > 300) {
      $("#navBar").addClass("navBarBG");
    } else if ($(document).scrollTop() < 100) {
      $("#navBar").removeClass("navBarBG");
    };
  });

  console.log("Ready");


  // INDEX
  // $(".a1").on("click", function() {
  //   console.log("Hello");
  //   $('html, body').animate({
  //     scrollTop: $(".a2").offset().top
  //   }, 500);
  // });
  //
  // $('.hoverPosA33').hover(){
  //   $(".hoverPosA33").addClass("hoverPosA33Effect");
  //   $(".posKetSellProduk").addClass('hoverPosA33TextEffect')
  // });

  $(".posA3311").hover(
    function() {
      $(this).addClass("hoverPosA3311Effect");
      $(".hoverPosA3311Text").removeClass('posKetSellProduk')
      $(".hoverPosA3311Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3311Effect");
      $(".hoverPosA3311Text").addClass('posKetSellProduk')
      $(".hoverPosA3311Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3312").hover(
    function() {
      $(this).addClass("hoverPosA3312Effect");
      $(".hoverPosA3312Text").removeClass('posKetSellProduk')
      $(".hoverPosA3312Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3312Effect");
      $(".hoverPosA3312Text").addClass('posKetSellProduk')
      $(".hoverPosA3312Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3321").hover(
    function() {
      $(this).addClass("hoverPosA3321Effect");
      $(".hoverPosA3321Text").removeClass('posKetSellProduk')
      $(".hoverPosA3321Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3321Effect");
      $(".hoverPosA3321Text").addClass('posKetSellProduk')
      $(".hoverPosA3321Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3322").hover(
    function() {
      $(this).addClass("hoverPosA3322Effect");
      $(".hoverPosA3322Text").removeClass('posKetSellProduk')
      $(".hoverPosA3322Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3322Effect");
      $(".hoverPosA3322Text").addClass('posKetSellProduk')
      $(".hoverPosA3322Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3323").hover(
    function() {
      $(this).addClass("hoverPosA3323Effect");
      $(".hoverPosA3323Text").removeClass('posKetSellProduk')
      $(".hoverPosA3323Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3323Effect");
      $(".hoverPosA3323Text").addClass('posKetSellProduk')
      $(".hoverPosA3323Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3324").hover(
    function() {
      $(this).addClass("hoverPosA3324Effect");
      $(".hoverPosA3324Text").removeClass('posKetSellProduk')
      $(".hoverPosA3324Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3324Effect");
      $(".hoverPosA3324Text").addClass('posKetSellProduk')
      $(".hoverPosA3324Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3331").hover(
    function() {
      $(this).addClass("hoverPosA3331Effect");
      $(".hoverPosA3331Text").removeClass('posKetSellProduk')
      $(".hoverPosA3331Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3331Effect");
      $(".hoverPosA3331Text").addClass('posKetSellProduk')
      $(".hoverPosA3331Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3332").hover(
    function() {
      $(this).addClass("hoverPosA3332Effect");
      $(".hoverPosA3332Text").removeClass('posKetSellProduk')
      $(".hoverPosA3332Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3332Effect");
      $(".hoverPosA3332Text").addClass('posKetSellProduk')
      $(".hoverPosA3332Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3333").hover(
    function() {
      $(this).addClass("hoverPosA3333Effect");
      $(".hoverPosA3333Text").removeClass('posKetSellProduk')
      $(".hoverPosA3333Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3333Effect");
      $(".hoverPosA3333Text").addClass('posKetSellProduk')
      $(".hoverPosA3333Text").removeClass('hoverPosA33TextEffect')
    }
  );

  $(".posA3334").hover(
    function() {
      $(this).addClass("hoverPosA3334Effect");
      $(".hoverPosA3334Text").removeClass('posKetSellProduk')
      $(".hoverPosA3334Text").addClass('hoverPosA33TextEffect')
    },
    function() {
      $(this).removeClass("hoverPosA3334Effect");
      $(".hoverPosA3334Text").addClass('posKetSellProduk')
      $(".hoverPosA3334Text").removeClass('hoverPosA33TextEffect')
    }
  );

  //WHYUS
  setTimeout(function() {
    $(".whyUsIntro").addClass("introWhite");
    $(".visionStatement").addClass("polindoBlack");
    $(".visionTitle").removeClass("polindoWhite");
    $(".visionTitle").addClass("primaryColor");
  }, 1500);

  //CSR
  $(".textWhite").addClass("polindoWhite")
  $("#logoBorderWhite").attr("src","assets/img/logoPolindo-White.svg");

  $(document).on('scroll', function() {
    if ($(document).scrollTop() > 300) {
      $(".textWhite").removeClass("polindoWhite");
      $("#logoBorderWhite").attr("src","assets/img/logoPolindo.svg");
    } else if ($(document).scrollTop() < 100) {
      $(".textWhite").addClass("polindoWhite");
      $("#logoBorderWhite").attr("src","assets/img/logoPolindo-White.svg");
    };
  });
});
