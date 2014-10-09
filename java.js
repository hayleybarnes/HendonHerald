// JavaScript source code
<script src;"java.js" type="text/javascript">
    function validateForm() {
        var email = document.forms["inputForm"]["email"].value;
        var message = document.forms["inputForm"]["message"].value;
        if (email == null || email == "", message == null || message == "") {
            alert("Form must be filled out!");

            return false;
        }
    }
    </script>