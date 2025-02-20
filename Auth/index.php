<?php
session_start();

if ($_SESSION['token'] == '') {
    echo '<form action="reg.php" method="post">
        <input type="text" name="name" placeholder="name">
        <input type="text" name="password" placeholder="password">
        <button type="submit">Зарегистрироваться</button>
    </form>
    <form action="auth.php" method="post">
        <input type="text" name="name" placeholder="name">
        <input type="text" name="password" placeholder="password">
        <button type="submit">Авторизоваться</button>
    </form>';
} else {
    echo '<form action="logout.php" method="post">
            <button type="submit">LOGOUT</button>
        </form>';
}

?>