(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Messenger'));

window.extAsyncInit = function () {
    // the Messenger Extensions JS SDK is done loading 
    MessengerExtensions.getContext('9692028104148102',
        function success(thread_context) {
            $("#psid").val(thread_context.psid);
            handleClickButtonReserveTable();
        },
        function error(err) {
            console.log('Lỗi đặt bàn MessengerExtensions getContext', err);

            //run fallback, get userID from URL
            $("#psid").val(senderId);
            handleClickButtonReserveTable()
        }
    );
};

//validate inputs
function validateInputFields() {
    const EMAIL_REG = /[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/g;
    const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

    let email = $("#email");
    let phoneNumber = $("#phoneNumber");

    if (!email.val().match(EMAIL_REG)) {
        email.addClass("is-invalid");
        return true;
    } else {
        email.removeClass("is-invalid");
    }

    if (phoneNumber.val().match(regex)) {
        phoneNumber.addClass("is-invalid");
        return true;
    } else {
        phoneNumber.removeClass("is-invalid");
    }

    return false;
}


function handleClickButtonReserveTable() {
    $("#btnReserveTable").on("click", function (e) {
        let check = validateInputFields();
        let data = {
            psid: $("#psid").val(),
            customerName: $("#customerName").val(),
            email: $("#email").val(),
            phoneNumber: $("#phoneNumber").val(),
            dateDB: $("#dateDB").val(),
            hourDB: $("#hourDB").val(),
            manyPeople: $("#manyPeople").val(),
        };

        if (!check) {
            //close webview
            MessengerExtensions.requestCloseBrowser(function success() {
                // webview closed
                callAjax()
            }, function error(err) {
                // an error occurred
                console.log("MessengerExtensions requestCloseBrowser", err);

                callAjax();
                $('#customerInfor').css("display: none")
                $('#handleError').css("display: block")
                $('#handleError').css("text-align: center")

            });

        }
    });
}


function callAjax() {
    $.ajax({
        url: `${window.location.origin}/reserve-table-ajax`,
        method: "POST",
        data: data,
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    })
}