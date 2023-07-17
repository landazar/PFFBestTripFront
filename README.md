# PFFBestTrip

Description
Le projet est la création d’un site internet pour partager des expériences de voyage et proposer des guides pour aider à organiser les prochaines expéditions.
Il y a pour cela différentes catégories d’utilisateurs qui peuvent interagir pour proposer leurs expériences et promouvoir les guides.
Le projet sera accessible sur les différents navigateurs web.

Environnement de développement:
Eclipse IDE pour le développement du backend sous Java et les tests sont réaliser en continu à chaque push sur github avec Jenkins
Visual Studio Code pour le développement du frontend

Technologies utilisées :
Spring : Framework Java pour le développement d'applications
Angular : Plateforme de développement d’applications web
MySQL : Système de gestion de base de données relationnelle



Installation
Cloner les dépôts github :
git clone https://github.com/landazar/PFFBestTripFront.git
git clone https://github.com/Emdgn/PFFBestTripBack.git


Frontend:
Installer les dépendances :
npm install
npm install jspdf
npm install html2canvas
npm install bootstrap@5.3.0

Lancer le frontend :
ng serve --open

Le frontend est accessible sur un navigateur web à l’adresse : http://localhost:4200


Architecture du Projet

Frontend

├── src/
│   ├── app/
│   │   ├── models/                 	  # Dossier pour les modèles de données
│   │   ├── services/               	  # Dossier pour les services
│   │   ├── components/             	  # Dossier pour les composants
│   │   │   ├── experiences/         	  # Dossier pour le composant expériences
│   │   │   │	├── ajout-experience      # Permet d’ajouter une expérience
│   │   │   ├── formulaire-utilisateur  # Dossier pour le composant formulaire-utilisateur
│   │   │   ├── guide-voyage/          	# Dossier pour le composant guide-voyage
│   │   │   │	├── afficher-guide        # Permet d’afficher la liste des guides voyage
│   │   │   │	├── ajout-guide           # Permet d’ajouter un guide voyage
│   │   │   │	├── details-guide         # Permet d’afficher les détails d’un guide
│   │   │   │	├── modifier-guide        # Permet de modifier un guide voyage
│   │   │   ├── menu/ 		              # Dossier pour le composant menu
│   │   │   ├── newsletter/  		        # Dossier pour le composant newsletter
│   │   │   ├── pays/ 			            # Dossier pour le composant pays
│   │   │   │	├── creer-pays            # Permet d'ajouter un pays
│   │   │   │	├── detail-pays           # Permet de voir les details d'un pays
│   │   │   │	├── update-pays           # Permet de modifier un pays
│   │   │   ├── update-utilisateur/	    # Dossier pour le composant update-utilisateur
│   │   │   ├── utilisateur/		        # Dossier pour le composant utilisateur
│   │   │   ├── ville/			            # Dossier pour le composant ville
│   │   │   │ ├── creer-ville           # Permet de créer une ville
│   │   │   │ ├── update ville          # Permet de modifier une ville
│   │   │   └── ...                 		# Autres dossiers pour les composants
│   │   ├── app.module.ts           	  # Module principal de l'application
│   │   ├── app.component.ts          	# Composant principal de l'application
│   │   ├── app-routing.module.ts 	    # Fichier définissant les routes
│   │   └── …
│   ├── assets/                     		# Dossier pour les ressources statiques
│   ├── index.html                  	  # Fichier HTML principal
│   ├── main.ts			
│   ├── styles.css                    	# Fichiers de styles
│   └── favicon.ico			                # Icône du projet
├── angular.json                  		  # Configuration du projet Angular
├── tsconfig.json                  		  # Configuration du compilateur TypeScript
└── ...



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
