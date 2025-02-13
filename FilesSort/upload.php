<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];
        echo $file['name'];
        echo $file['type'];
    }
}