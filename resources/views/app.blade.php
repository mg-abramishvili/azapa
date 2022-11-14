<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azapa</title>
    @vite('resources/css/app.css')
</head>
<body>
    <div id="app"></div>

    <!-- Core -->
    <script src="/volt/@popperjs/core/dist/umd/popper.min.js"></script>
    <script src="/volt/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Vendor JS -->
    <script src="/volt/onscreen/dist/on-screen.umd.min.js"></script>

    <!-- Charts -->
    <script src="/volt/chartist/dist/chartist.min.js"></script>
    <script src="/volt/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js"></script>

    <!-- Datepicker -->
    <script src="/volt/vanillajs-datepicker/dist/js/datepicker.min.js"></script>

    <!-- Sweet Alerts 2 -->
    <script src="/volt/sweetalert2/dist/sweetalert2.all.min.js"></script>

    <!-- Moment JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>

    <!-- Vanilla JS Datepicker -->
    <script src="/volt/vanillajs-datepicker/dist/js/datepicker.min.js"></script>

    <!-- Notyf -->
    <script src="/volt/notyf/notyf.min.js"></script>

    <!-- Simplebar -->
    <script src="/volt/simplebar/dist/simplebar.min.js"></script>

    <script src="/volt/volt.js"></script>
    
    @vite('resources/js/app.js')
</body>
</html>