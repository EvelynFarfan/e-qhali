$(document).ready(function(){
  $("#btnPrimerNivel").on( "click", function(){
    $("#btnNivelHospitalario").removeClass("buttonComponent");
    $("#btnNivelHospitalario").addClass("mt8");
    $("#btnPrimerNivel").addClass("buttonComponent");
    $("#btnPrimerNivel").removeClass("mt8");
    $(".primerNivel").removeClass("displayNone");
    $(".primerNivel").addClass("displayBlock");
    $(".nivelHospitalario").removeClass("displayBlock");
    $(".nivelHospitalario").addClass("displayNone");
  });
  $("#btnNivelHospitalario").on( "click", function(){
    $("#btnPrimerNivel").removeClass("buttonComponent");
    $("#btnPrimerNivel").addClass("mt8");
    $("#btnNivelHospitalario").addClass("buttonComponent");
    $("#btnNivelHospitalario").removeClass("mt8");
    $(".nivelHospitalario").removeClass("displayNone");
    $(".nivelHospitalario").addClass("displayBlock");
    $(".primerNivel").removeClass("displayBlock");
    $(".primerNivel").addClass("displayNone")
  });
});