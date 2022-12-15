<?php

  include_once __DIR__ . '/../db/index.php';

  $arrayDischi = [];

  if( !empty($_GET) && !empty($_GET['genre'] ) ){

    foreach( $database as $elem ){
      // var_dump( $_GET['tipo'] );
      if( $elem['genre'] == $_GET['genre'] ){
        //se il tipo del prodotto corrisponde al tipo scritto nel parametro url "tipo" pusho l'elemento dell'array filtrato
        $arrayDischi[] = $elem;
      }

    }

  } else {
    
    $arrayDischi = $database; 
    
  }

  header('Content-type: application/json');

  echo json_encode( $arrayDischi );

?>