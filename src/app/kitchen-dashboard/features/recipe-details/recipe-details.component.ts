import { Component, OnInit } from '@angular/core';
import { RecipeDetails } from 'src/app/kitchen-dashboard/models/recipe-details.model';
import { RecipeService } from 'src/app/kitchen-dashboard/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeDetails;
  recipeNameEditText: string;
  recipeNameEditible = false;

  recipeDescriptionEditText: string;
  recipeDescriptionEditible = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipesDetails(id)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.recipeNameEditText = recipe.name;
      });
  }

  enableRecipeNameEdit(): void {
    this.recipeNameEditible = true;
  }

  confirmRecipeNameEdit(): void {
    this.recipe.name = this.recipeNameEditText;
    this.recipeNameEditible = false;
  }
  
  cancelRecipeNameEdit(): void {
    this.recipeNameEditText = this.recipe.name;
    this.recipeNameEditible = false;
  }

  enableRecipeDescriptionEdit(): void {
    this.recipeDescriptionEditible = true;
  }

  confirmRecipeDescriptionEdit(): void {
    this.recipe.name = this.recipeDescriptionEditText;
    this.recipeDescriptionEditible = false;
  }

  cancelRecipeDescriptionEdit(): void {
    this.recipeDescriptionEditText = this.recipe.name;
    this.recipeDescriptionEditible = false;
  }

  onUpdateClicked(): void {
    this.recipeService.updateRecipe(this.recipe)
      .subscribe(() => this.router.navigate(['/kitchen']));
  }

  onDeleteClicked(): void {
    this.recipeService.deleteRecipe(this.recipe.id)
      .subscribe(() => this.router.navigate(['/kitchen']));
  }

  onCancelClicked(): void {
    this.router.navigate(['/kitchen']);
  }

  isRecipeNameValid(): boolean {
    return this.recipeNameEditText.trim() !== '';
  }
}
