<!DOCTYPE html>

<head>
    <title>Zach Magloughlin: Contact</title>
    
    <link rel="stylesheet" href="resources/css/contact.css">
</head>

<body>
    <?php include 'common.php'; ?>
    
    <div id="contact">
        <div id="intro">
            <p> To contact me, please email <a href="mailto:magloughlin.zach@gmail.com">magloughlin.zach@gmail.com</a>. </p>
            <p> The form below is for illustration purposes only. </p>
        </div>
    </div>

    <?php include 'under_construction.php'; ?>
    
    <form>
        <fieldset id="contact_me">
            <h1>Contact me!</h1>
            <div class="label_input" id="first_name">
                <label for="first_name">First Name:</label>
                <input type="text" id="first_name" name="first_name" required><br>
            </div>
            <div class="label_input" id="last_name">
                <label for="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name"><br>
            </div>
            <div class="label_input" id="email">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>
            </div>
            <div class="label_input" id="message">
                <label for="message">Message:</label>
                <textarea type="textarea" id="message" name="message" required></textarea>
            </div>
            <div id="submit">
                <input id="submit" type="submit" value="Submit">
            </div>
        </fieldset>
    </form>

    
    <?php include 'footer.php'; ?>
</body>

</html>