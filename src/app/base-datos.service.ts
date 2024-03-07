import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Numero } from './numero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseDatosService {
  private numeroProcesado: Numero = {
    valor: 0,
    multiplos: [],
    esMultiploDeTres: false,
    esMultiploDeCinco: false,
    esMultiploDeSiete: false,
  };

  constructor(private firestore: AngularFirestore) {}

  procesarMultiplos(numero: number): void {
    // Lógica para encontrar múltiplos de 3, 5 y 7 entre 0 y el número proporcionado
    this.numeroProcesado.valor = numero;
    this.numeroProcesado.multiplos = [];
    this.numeroProcesado.esMultiploDeTres = false;
    this.numeroProcesado.esMultiploDeCinco = false;
    this.numeroProcesado.esMultiploDeSiete = false;

    if (numero % 3 === 0) {
      this.numeroProcesado.multiplos.push('3');
      this.numeroProcesado.esMultiploDeTres = true;
    }

    if (numero % 5 === 0) {
      this.numeroProcesado.multiplos.push('5');
      this.numeroProcesado.esMultiploDeCinco = true;
    }

    if (numero % 7 === 0) {
      this.numeroProcesado.multiplos.push('7');
      this.numeroProcesado.esMultiploDeSiete = true;
    }
    // Guardar los resultados en Firestore
    this.guardarEnBaseDeDatos(this.numeroProcesado);
  }

  guardarEnBaseDeDatos(resultado: Numero): void {
    // Lógica para guardar la petición y el resultado en Firestore
    console.log('Guardando en la base de datos: Peticion:', resultado.valor, 'Resultado:', resultado);
    const documentPath = `peticionesNumero/numero${resultado.valor}`; // Ruta al documento con el número ingresado
    this.firestore.doc(documentPath).set({ resultado }); // Usamos set() para crear o actualizar el documento
  }

  getNumeroProcesado(): Numero {
    return this.numeroProcesado;
  }
}
