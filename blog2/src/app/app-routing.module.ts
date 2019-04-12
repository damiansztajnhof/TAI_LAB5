import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { BlogHomeComponent } from '../app/components/blog-home/blog-home.component';
import { QuizComponent } from '../app/components/quiz/quiz.component';
import { BlogItemDetailsComponent } from '../app/components/blog-item-details/blog-item-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    },
    {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogHomeComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailsComponent
  },
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
