let flag_follow = false
let flag_like = false
let likeCo = 0

$( document ).ready(function() {
    $( ".error" ).hide()
});
$( "#btn-follow" ).on( "click", function() {
    
    if (flag_follow){
        $( "#btn-follow" ).html("Seguir")
        flag_follow=false
    }else{
        $( "#btn-follow" ).html("Dejar de seguir")
        flag_follow=true
    }

  } );

  $( "#btn-like" ).on( "click", function() {
    
    if (flag_like){
        likeCo--;
        $( "#btn-like" ).html("Me gusta")
        $( "#btn-like" ).toggleClass("btn-danger btn-primary")
        flag_like=false
    }else{
        likeCo++;
        $( "#btn-like" ).html("No me gusta")
        $( "#btn-like" ).toggleClass("btn-primary btn-danger")
        flag_like=true
    }
    $( "#cont-likes" ).html(`<b>${likeCo}</b>`)

  } );

  $( "#btn-comment" ).on( "click", function() {
    const text = $( "#comment-field" ).val()
    const name = $( "#name-field" ).val()
    if(text == ""){
        $( ".error" ).show()
        $( ".error" ).html("Debes completar el campo de comentario")
        $( "#comment-field" ).addClass("border-danger")
    }else if(name == ""){
        $( ".error" ).show()
        $( "#name-field" ).addClass("border-danger")
        $( ".error" ).html("Debes completar el campo de nombre de usuario")
    }else{
        $( "#name-field" ).removeClass("border-danger")
        $( "#comment-field" ).removeClass("border-danger")
        $( ".error" ).hide()
        $( ".text-box-comments").append(`<div class="commet"><b>${name} </b> ${text} <button type="button" class="btn btn-outline-danger ml-5 btn-delete">Danger</button></div>`)
        
    }
    

  } );

$(document).on('click', '.btn-delete', function () {
    $(this).parent().remove()
});
  
