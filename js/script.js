(function($) {

//.................................
//
//         Right ADD
//
//.................................

	var images = $('.cover'),
        addBox = $('.add');
    
    images.children(':not(:last)').hide();

    setInterval(function() {
        addBox.children(':last')
            .fadeOut(1500, function() { 
                $(this).prependTo(addBox);
            })
            .prev()
            .fadeIn(1500);
	}, 4000);


//................................
//
//         Left FORM
//
//................................

    var signIn = $('form'),
        mail = $('#email');

    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    mail.blur(function() {
        var emailValue = $(this).val();

        if(emailValue.length > 4 && re.test(emailValue)) {
            $('label').first().text('Did you make it? When you were 13?');
            $('input').first().addClass("validated");
        } else {
            $('label').first().text('Nice try...');
        };
    });

        
    signIn.submit(function(event) {
        var psw = $('#psw').val(),
            pswRep = $('#psw-repeat').val(),
            form = $('.form');

        if (psw === pswRep) {
            form.children().hide();
            form.addClass('subscribed').fadeIn(3000);
        } else { 
            $('label').last().text('This is getting embarassing, dude. You know that passwords have to match, right?');
        };

        event.preventDefault();
        return false;
    });
})(jQuery);