<?php

    if(isset($_POST['submit'])) {
        // we create variable for all input
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // the mail we want to send message to
        $mailTo = "foludev@outlook.com";
        // the header we want to include, which we can use to add extra information like who the mail is from
        $headers = "From: ".$emailFrom;
        $customTxt = "You have received an Email from ".$name.".\n\n".$message;

        // php inbuilt mail function takes in different parameters
        mail($mailTo, $subject, $customTxt, $headers);

        // function that takes us back to the homepage when message is sent
        header("Location: index.html?mailsent");
    }