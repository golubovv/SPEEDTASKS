<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $password = $_POST['password'];
    $user = $name . ' ' .$password;
    $users = file_get_contents('users.txt');
    $users = explode(';', $users);
    if (in_array($user, $users)) {
        session_start();
        $_SESSION['token'] = 12345;
        echo $user . ' ' . $_SESSION['token'];
    } else {
        echo 'NOOOOOOO';
    }
    // file_put_contents('users.txt', $user, FILE_APPEND);
    header('Location: index.php');
}
