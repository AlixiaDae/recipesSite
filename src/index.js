import initializeWebsite from './pages/mainpage'
import './style.css'
import { Recipe } from './pages/recipeClass'
import { Cookbook } from './pages/cookbookModule'

initializeWebsite()

const stew = new Recipe("Hearty Viking Stew")
stew.addIngredients("1 lb beef or venison, cubed")
stew.addIngredients("2 onions, chopped")
stew.addIngredients("3 carrots, chopped")
stew.addIngredients("2 parsnips, chopped")
stew.addIngredients("2 turnips, chopped")
stew.addIngredients("4 cups beef broth")
stew.addIngredients("2 tbsp butter")
stew.addIngredients("1 tbsp salt")
stew.addIngredients("1 tsp ground black pepper")
stew.addIngredients("1 tsp dried thyme")
stew.addIngredients("1 tsp dried sage")

stew.addInstructions("In a large pot, melt the butter over medium heat. Add the onions and cook until softened.")
stew.addInstructions("Add the meat and cook until browned on all sides.")
stew.addInstructions("Stir in the carrots, parsnips, turnips, salt, pepper, thyme, sage, and rosemary.")
stew.addInstructions("Pour in the beef broth, bring to a boil, then reduce the heat and let it simmer for 1-2 hours, or until the meat is tender and the vegetables are cooked through.")
stew.addInstructions("Serve hot with a side of Viking Flatbread or rustic rye bread.")

const cookBook = new Cookbook()
cookBook.addRecipe(stew)
console.log(cookBook.getRecipe(stew.getName()))
