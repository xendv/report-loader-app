<?php
    // skip OPTIONS method
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
        die();
    }
    // allow every url
    header('Access-Control-Allow-Origin:  *');
    header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
    // allow content type !!IMPORTANT
    header('Content-Type: application/json');

    //Because the content-type sent by vuejs is application/json, you will not be able to read data via the $_POST $_GET or $_REQUEST variable.
    $post = json_decode(file_get_contents('php://input'), true);
require_once('../../src/scripts/classes/dataBaseManager.php');
require_once('../../src/scripts/classes/dataUploader.php');
require_once('../../src/scripts/load-data.php');
require_once('../../src/scripts/manage-data.php');
require_once('../../src/scripts/upload.php');
//require_once(__DIR__.'\classes\dataUploader.php');