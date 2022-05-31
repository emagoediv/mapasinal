<?php

const DBDRIVE = 'mysql';
const DBHOST = 'localhost';
const DBNAME = 'mapasinal';
const DBUSER = 'root';
const DBPASS = '';

$conn = new PDO(DBDRIVE.":dbhost=".DBHOST.";dbname=".DBNAME, DBUSER, DBPASS);