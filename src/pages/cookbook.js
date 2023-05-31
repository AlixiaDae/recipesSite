import { CookBook } from './cookbookClass'
import { Recipe } from './recipeClass'
import Stew from '../images/stew.jpg'
import Flatbread from '../images/flatbread.png'
import Yogurt from '../images/yogurt.jpg'
import Porridge from '../images/porridge.jpg'

const book = new CookBook()
const stew = new Recipe("Hearty Viking Stew", Stew, "A stew fit for a warrior after a long day's battle.")
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

const flatbread = new Recipe("Viking Flatbread", Flatbread, "Simple and filling, a perfect vehicle for delicious treats.")

const yogurt = new Recipe("Skyr with Honey and Nuts", Yogurt, "Sweetened with honey, add your favorite berries and nuts for a healthy snack.")

const porridge = new Recipe("Viking Barley Porridge", Porridge, "The staple of staples. Change it with every season.")


book.addRecipe(stew)
book.addRecipe(flatbread)
book.addRecipe(yogurt)
book.addRecipe(porridge)

export default book