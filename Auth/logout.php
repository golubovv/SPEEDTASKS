<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    session_start();
    $_SESSION['token'] = '';
    // file_put_contents('users.txt', $user, FILE_APPEND);
    header('Location: index.php');
}
