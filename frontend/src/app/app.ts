import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlaskService } from './services/flask-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // profilo diventa un SIGNAL
  profilo = signal<any>({});

  constructor(private flaskService: FlaskService) {}

  ngOnInit(): void {
    this.flaskService.getProfilo().subscribe((dati) => {
      this.profilo.set(dati);   // aggiorna il signal
      console.log("Dati arrivati:", this.profilo());
    });
  }
}