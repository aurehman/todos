<?php 
require_once '../lib/db.php'; // The mysql database connection script
if(isset($_GET['task'])){
$taskRaw = $_GET['task'];
$task = preg_replace( '/\\\\(?="|\')/', '', $taskRaw );
$status = "0";
$created = time();

$query="INSERT INTO tasks(task,status,created_at)  VALUES ('$task', '$status', '$created')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

echo $json_response = json_encode($result);
}
?>