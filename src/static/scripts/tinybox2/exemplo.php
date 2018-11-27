<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>

<link rel="stylesheet" href="tinybox.css" />
<script type="text/javascript" src="tinybox.js"></script>

</head>

<body>

<?php 
						
	$msg_sucesso = "<h1>Mensagem de Sucesso</h1>"; 
	$msg_sucesso .= "<ul><li>Você deve especificar o título da mensagem usando a tag html h1.</li>" ;
	$msg_sucesso .= "<li>Depois disso, pode colocar o texto complementar desejado.</li></ul>";

?>

 <?php 
						
	$msg_error = "<h1>Mensagem de Erro 1</h1>"; 
	$msg_error .= "<ul><li>Você deve especificar o título da mensagem usando a tag html h1.</li>" ;
	$msg_error .= "<li>Depois disso, pode colocar o texto complementar desejado.</li></ul>";
	$msg_error .= "<h1>Mensagem de Erro 2</h1>"; 
	$msg_error .= "<ul><li>Também é possível adicionar mais de um tópico ao box de mensagens.</li> ";
	$msg_error .= "<li>Basta colocar mais uma tag h1 e o texto relacionado.</li>";
	$msg_error .= "<li>Esse texto pode ser apresentado no formato de lista.</li></ul>";
							
?>

 <?php 
						
	$msg_alerta = "<h1>Mensagem de Alerta</h1>"; 
	$msg_alerta .= "Este texto foi adicionado fora de uma lista e não possui um container. Utilize para textos maiores e únicos.";
							
?>


<ul>
	<li onClick="TINY.box.show({html:'<?php echo($msg_sucesso);?>',animate:false, close:false, boxid:'success',top:100})">sucesso</li>
    <li onClick="TINY.box.show({html:'<?php echo($msg_error);?>',animate:false, close:false, boxid:'error',top:100})">erro</li>
    <li onClick="TINY.box.show({html:'<?php echo($msg_alerta);?>',animate:false, close:false, boxid:'alert',top:100})">alerta</li>
</ul>


</body>
</html>
