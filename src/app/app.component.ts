import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-text-search-highlight';
  searchText = '';
  alphabets = [ 'Apple','Ball','Boy','BatMan','Cat','Dog','Egg','Frog','Goat','Girl','Horse','Ice-cream','Jug','King','Lion','Monkey','Nose','Owl','Parrot','Queen','Rose',
    'Sun','Spider-Man','Supergirl','Superman','Tent','Umberella','Van','Wonder Woman','Wolf','X-ray','yak','Zee','Zebra','Zeenat',]
}
