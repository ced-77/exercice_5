<?php 
/*
	fichier du traitement du formulaire
*/

	// verification d'un POST
	if ( ! empty($_POST) ) {


		// post non vide on le recupere
			$chaine = $_POST['donnees'];
		// commentairea


		// on retranscrit la chaine récupere en tableau pour recupere les donnée
			parse_str($chaine, $tableau);

			$prenom = $tableau['prenom'];
			$message = $tableau['message'];
		// on transphorme les données pour inverser l'ordre des lettres
			$prenom_inv = strrev($prenom);
			$message_inv = strrev($message);
		// on met le resultat sous forme de tableau
			$nouv_tableau = array(
					'prenom' => $prenom_inv,
					'message' => $message_inv
				);

		// on transphorme le tableau en json
			$tableau_json = json_encode($nouv_tableau);

		// on prepare l'envoi
			$reponse = $tableau_json;


		
		// renvoi de la reponse sous forme de tableau
			echo $reponse;
			exit;


	} else { echo 'erreur0'; exit; }

	echo 'erreur1'; exit;
