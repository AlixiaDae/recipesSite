import { CookBook } from './cookbookClass'
import { Recipe } from './recipeClass'
import Stew from '../images/stew.jpg'

const book = new CookBook()
const stew = new Recipe("Hearty Viking Stew", Stew)
stew.addIngredients("1 lb beef or venison, cubed")
stew.addIngredients("2 onions, chopped")
stew.addIngredients("3 carrots, chopped")
stew.addIngredients("2 parsnips, chopped")
stew.addIngredients("4 cups beef broth")
stew.addIngredients("2 tbsp butter")
stew.addIngredients("1 tsp salt")
stew.addIngredients("1 tsp ground black pepper")
stew.addIngredients("1 tsp dried thyme")
stew.addIngredients("1 tsp dried sage")
stew.addIngredients("1 tsp died rosemary")
stew.addInstructions("In a large pot, melt the butter over medium heat. Add the onions and cook until softened.")
stew.addInstructions("Add the meat and cook until browned on all sides.")
stew.addInstructions("Stir in the carrots, parsnips, turnips, salt, pepper, thyme, sage, and rosemary.")
stew.addInstructions("Pour the beef broth, bring to a boil, then reduce the heat and let it simmer for 1-2 hours, or until the meat is tender and the vegetables are cooked through.")
stew.addInstructions("Serve hot with a side of Viking flatbread or rustic rye bread.")


book.addRecipe(stew)

console.log(book.getRecipe("Hearty Viking Stew"))

export default book