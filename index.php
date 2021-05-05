<?php
    ini_set('display_errors',1);
    echo '<br>';
    error_reporting(E_ALL);
    function debug($str){
        echo '<pre>';
        var_dump($str);
        echo '</pre>';
        exit;
    }
    require_once 'app/bootstrap.php';


