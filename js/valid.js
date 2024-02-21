function formdata(params) {

    var msg = document.getElementById('msg');

    $(document).ready(function () {

        var email = $('.mail').val();
        var pass = $('.pass').val();

        var rjex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"

        if (email != rjex) {
            msg.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Enter Valid Email Address!
                </div>
            `
        }

        if (pass.length < 8) {

            msg.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Password length must be 8!
                </div>
            `
        }
    })

    return false;
}

function handleSubmit() {

    var msg = document.getElementById('msg');

    $(document).ready(function () {

        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var add = $('#add').val();
        var email = $('#email').val();
        var pass = $('#pass').val();
        var cpass = $('#cpass').val();


        if(fname == null || lname == null || add == null || email == null || pass == null || cpass == null ) {
            msg.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Enter your specific field !!!
            </div>
        `
        }

        var rjex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"

        if (email != rjex) {
            msg.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Enter Valid Email Address!
                </div>
            `
        }

        if (pass != cpass) {
            msg.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Password does't match !
                </div>
            `    
        }
    })

}
