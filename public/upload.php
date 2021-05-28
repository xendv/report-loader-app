<?php

require_once(__DIR__.'\classes\dataBaseManager.php');
require_once(__DIR__.'\classes\dataUploader.php');
//if ()
function uploadData(){
    $dataUploader = new dataUploader;

    $dataUploader->connect();
}


