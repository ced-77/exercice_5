$(document).ready(function(){


	// action sur le bouton d'envoi
		$('button').on('click', function(event){

			// suppression du comportement par defaut
				event.preventDefault();

			// recuperation du formulaire et serialisation de celui-ci

				var formulaire = $('form');
				var data = formulaire.serialize();

			// envoie du formulaire au fichier de traitement PHP
				console.log(formulaire);

				console.log(data);

				$.ajax({
					type: 'POST',
					url: 'traitement.php',
					data: {'donnees':data},
					// dataType: 'html',
					dataType: 'json',

					success : function(reponse, statut){

						// affichage du contenu du data
							console.log(reponse);
							$('#prenom').val(reponse['prenom']);
							$('textarea').val(reponse['message']);
							console.log('Etat de la requete : '+statut);

					// fin du success
					},


					error : function (resultat, statut, erreur){
						console.log("reponse jquery : " + resultat);
						console.log("statut de la requete : "+statut);
						console.log("type d'erreur : "+erreur);
						$('.erreur').html('Errreur : ('+erreur+')')

					// fin de la gestion d'erreur
					},

				// fin de la fonction ajax
				})



		// fin de la fonction clic sur le BOUTON
		});

	// activation du bouton du formulaire
		$('.form').on('keyup', function(){

			if ( $('#prenom').val().length > 0 || $('#message').val().length >0 ) {

				$('#button').css('display','initial');
			} else { $('#button').css('display','none'); }
			
		})



	/*
			touche()
		creation de la fonction de controle du nbr de caractère
	*/ 
		function touche() {

				// calcule du nombre de caractère
					var nbrCaractere = $(this).val().length;

				// calcule le nombre de cararactère restant
					let restant = 140-nbrCaractere;

				// affichage du nombre de caractère
					var msg = ' '+restant+' caractères sur 140';

					$('#caraRest').text(msg);

					
		// fin de la fonction de comptage des caractères
		};

	// comptage des caractères
		$('#message').on('keyup', touche);
		$('#message').on('keydown', touche);












// fin du script
})



