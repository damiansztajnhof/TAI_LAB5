import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './componencts/home/home.component';
import {BlogComponent} from './componencts/blog/blog.component';
import {ContactComponent} from './componencts/contact/contact.component';
import {QuizComponent} from './componencts/quiz/quiz.component';

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
    component: BlogComponent,
  },
  {
           path: 'quiz',
      component: QuizComponent,
  
  }];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
