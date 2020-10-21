import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  filmIcon = faFilm;
  constructor() { }

  ngOnInit(): void {
  }

}
