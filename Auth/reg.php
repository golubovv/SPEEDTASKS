<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $password = $_POST['password'];
    $user = $name . ' ' .$password . ';';
    echo $user;
    file_put_contents('users.txt', $user, FILE_APPEND);
    header('Location: index.php');
}
