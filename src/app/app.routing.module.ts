import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPlansComponent } from './workout-plans/workout-plans.component';
import { ExerciseTutorialsComponent } from './exercise-tutorials/exercise-tutorials.component';
import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { ProgressTrackingComponent } from './progress-tracking/progress-tracking.component';

const routes: Routes = [
  { path: 'workout-plans', component: WorkoutPlansComponent },
  { path: 'exercise-tutorials', component: ExerciseTutorialsComponent },
  { path: 'meal-plans', component: MealPlansComponent },
  { path: 'progress-tracking', component: ProgressTrackingComponent },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
