import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  constructor() { }

  // PRESTATIONS
  dataHovered: string = '';
  dataClicked: any = {}; /* - sans "{}" => erreur : Cannot read property 'titre' of undefined (//app.component.html => {{ mainService.dataClicked.titre }})
						     => au chargmement de la page, on recherche la donnée d'un objet qui n'existe pas encore puisque rien a été cliqué, 
						     d'où le retour à la normale après que le lien ait été cliqué, donc nécessité de donner une valeur de base à cet objet (=> {})
						    - avec "object" à la place de "any" => erreur "Property 'titre' does not exist on type 'object'" au moment de faire un 
						    ng build --prod*/
}
