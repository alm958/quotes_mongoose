$(document).ready(function() {
    console.log( "ready!" );

    $.ajax({
        method:'get',
        url:'/form',
        success: function(response){
            $('.form').html(response);
        }
    })

    $('.form').on('submit','#quoteform', function(e){
        e.preventDefault();
        $.ajax({
            method:'post',
            url:'/quotes/new',
            data:$('form').serialize(),
            success: function(response){
                $('.quotes').html(response);
                document.getElementById("quoteform").reset();
            }
        })
    })

    $('.form').on('click','#showquotes', function(e){
        e.preventDefault();
        $.ajax({
            method:'get',
            url:'/quotes',
            success: function(response){
                $('.quotes').html(response);
                document.getElementById("quoteform").reset();
            },
            error: function(response){
                $('.error').html(response);
            }
        })
    })

    $('.quotes').on('click','button.delete',function(e){
        e.preventDefault();
        console.log(this.dataset);
        var quotedata = $(this).data();
        $( "#dialog" ).dialog({
            title: '',
            width: 100,
            height: 100,
            modal: true,
            resizable: false,
            buttons:[
                {
                    text: `Delete`,
                    click: function() {
                        $(this).dialog('close');
                        $.ajax({
                            method:'post',
                            url:'/quotes/destroy',
                            data: quotedata,
                            success: function(response){
                                $('.quotes').html(response);
                                $('.error').html('');
                            },
                            error: function(response){
                                $('.error').append(response.responseText);
                            }
                        })
                    }
                },
                {
                    text: `Cancel`,
                    click: function() {
                        $(this).dialog('close');
                    }
                },
            ]
         });
    })





});
