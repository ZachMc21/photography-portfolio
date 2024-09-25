<!DOCTYPE html>

<head>
    <title>Zach Magloughlin: Contact</title>
    
    <link rel="stylesheet" href="resources/css/contact.css">
</head>

<body>
    <?php include 'common.php'; ?>
    
    <div id="contact">
        <div id="intro">
            <p> To contact me, please email <a href="mailto:magloughlin.zach@gmail.com">magloughlin.zach@gmail.com</a> or use the form below. </p>
            <p> This form is for illustration purposes only. </p>
        </div>
    </div>

    <?php include 'under_construction.php'; ?>
    
    <form>
        <fieldset id="contact_me">
            <legend>Contact Me!</legend>
            <label for="first_name">First name:</label>
            <input type="text" id="first_name" name="first_name" required><br>
            <label for="last_name">Last name:</label>
            <input type="text" id="last_name" name="last_name"><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="message">Message:</label>
            <input type="text" id="message" name="message" required><br>
            <input type="submit" value="Submit">
        </fieldset>
    </form>

    
    <?php include 'footer.php'; ?>
</body>

</html>