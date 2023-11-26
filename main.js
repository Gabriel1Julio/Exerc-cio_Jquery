console.log($('form'));

$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('form input').val();
        const novaLinha = $(`<li> ${novaTarefa} </li>`);
        $(novaLinha).appendTo('ul');
        $('form input').val('');
    })

    $(".lista").on("click", "ul li", function() {
        $(this).toggleClass("line-through");
    });
})