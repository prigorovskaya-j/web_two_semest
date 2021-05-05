<?php
    namespace app\core;
    require 'app/lib/proba.php';
    use lab\app\core\Router;

    spl_autoload_register(function ($class){
        $path = str_replace('\\','/',$class.'.php');
        echo $path;
        echo '<br>';
        if(file_exists($path)){
            require $path;
        }
    });
    $router = new Router;

