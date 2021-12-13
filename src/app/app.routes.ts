import { Routes } from '@angular/router';
import { CharacterDetailComponent } from './resources/characters/character-detail/character-detail.component';
import { CharacterListComponent } from './resources/characters/character-parent/character-parent.component';

export const appRoutes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
];
