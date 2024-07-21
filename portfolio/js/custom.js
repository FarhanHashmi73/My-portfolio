


// DROPDOWN

$(document).ready(function () {
    $('.influ-drop-btn').click(function () {
        $(".influ-drop-list").not($(this).parent().find(".influ-drop-list").slideToggle('fast')).slideUp();
        event.stopPropagation();
    });

    $('.influ-drop-btn').click(function () {
        $(".far").not($(this).parent().find(".far").toggleClass('active')).removeClass('active');
    });

    $(document).click(function () {
        $('.influ-drop-list').slideUp('fast');
        $(".far").removeClass('active');
    });
    $('.influ-drop-list').click(function () {
        event.stopPropagation();
    });
});

// DROPDOWN


// MORE-DROPDOWN

$(document).ready(function () {
    $('.influ-more-drop-btn').click(function () {
        $(".influ-more-drop-list").not($(this).parent().find(".influ-more-drop-list").slideToggle('fast')).slideUp();
        event.stopPropagation();
    });

    $(document).click(function () {
        $('.influ-more-drop-list').slideUp('fast');
    });
    $('.influ-more-drop-list').click(function () {
        event.stopPropagation();
    });
});

// MORE-DROPDOWN

// FAQ-POP-SERVICE-DROPDOWN

$(document).ready(function () {
    $('.faq-dropdown-btn').click(function () {
        $(".faq-dropdown-list").slideToggle('fast');
        $(this).toggleClass('active');
        event.stopPropagation();
    });

    $(document).click(function () {
        $('.faq-dropdown-list').slideUp('fast');
        $('.faq-dropdown-btn').removeClass('active');
    });
});

// FAQ-POP-SERVICE-DROPDOWN


$(document).ready(function () {
    $('.quotes .dropdown-btn').click(function () {
        $(".dropdown").not($(this).parent().find(".dropdown").toggle()).hide();
        event.stopPropagation();
    });
    $(document).click(function () {
        $(".dropdown").hide();
    });
    $('.dropdown').click(function () {
        event.stopPropagation();
    });
});



$(function () {

    $('input[name="datefilter"]').daterangepicker({
        opens: 'left',
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Cancel'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

});


$(document).ready(function () {
    $('.applyBtn').click(function () {
        $('.broker-date').css('width', '240px')
    })
    $('.cancelBtn').click(function () {
        $('.broker-date').css('width', '150px')
    })
});

// datpicker

// PASSOWRD-HIDE-SHOW

$(function () {
    $('#eye').click(function () {
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $('#password').attr('type', 'text');
        } else {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('#password').attr('type', 'password');
        }
    });

    $('#eye1').click(function () {
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $('#password1').attr('type', 'text');
        } else {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('#password1').attr('type', 'password1');
        }
    });




});

// PASSOWRD-HIDE-SHOW




// TOGGLE SIDEBAR

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})

// TOGGLE SIDEBAR