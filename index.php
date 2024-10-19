<?php
session_start();
require 'database.php';

// Obtener mensajes
$stmt = $pdo->query("SELECT messages.id, messages.message, messages.category, users.username FROM messages JOIN users ON messages.user_id = users.id");
$messages = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <