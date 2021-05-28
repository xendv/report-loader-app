<?php

require_once('./classes/dataBaseManager.php');
require_once(__DIR__.'\classes\dataUploader.php');
//if ()
$dataUploader = new dataUploader;

$dataUploader->connect();

