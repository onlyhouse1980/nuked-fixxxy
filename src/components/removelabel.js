function RemoveLabel() {
    var label = $('label.remove span');
    var input = $('label.remove input');
  
    input.parents('form').attr('autocomplete', 'off');

    input.keydown(function() {
        $(this).prev().hide();
    });

    input.keyup(function() {
        if ($(this).val() === '') {
            $(this).prev().show();
        }
    });

    input.focus(function() {
        if ($(this).val() === '') {
            $(this).prev().fadeTo(100, 0.3);
        }
    });

    input.blur(function() {
        if ($(this).val() === '') {
            $(this).prev().fadeTo(100, 1);
        }
    });
};

export default RemoveLabel;