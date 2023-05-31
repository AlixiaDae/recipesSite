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

flatbread.addIngredients("2 cups whole wheat flour")
flatbread.addIngredients("1 cup water")
flatbread.addIngredients("1 tsp salt")
flatbread.addInstructions("In a large bowl, mix the flour and salt.")
flatbread.addInstructions("Gradually add the water, stirring until a soft dough forms. Knead the dough for a few minutes until smooth.")
flatbread.addInstructions("Divide the dough into 6-8 equal pieces and roll each piece into a thin, round flatbread.")
flatbread.addInstructions("Heat a dry frying pan over a medium heat. Cook each flatbread for 2-4 minutes on each side, or until puffed and golden brown.")
flatbread.addInstructions("Serve warm.")

const yogurt = new Recipe("Skyr with Honey and Nuts", Yogurt, "Sweetened with honey, add your favorite berries and nuts for a healthy snack.")

yogurt.addIngredients("2 cups skyr")
yogurt.addIngredients("4 tbsp honey")
yogurt.addIngredients("1/2 cup mixed nuts, chopped")
yogurt.addIngredients("1/2 cup mixed berries(optional)")

yogurt.addInstructions("Divide the skyr among four serving bowls.")
yogurt.addInstructions("Drizzle each bowl with honey and top with chopped nuts and berries, if desired.")
yogurt.addInstructions("Serve immediately.")

const porridge = new Recipe("Viking Barley Porridge", Porridge, "The staple of staples. Change it with every season.")

porridge.addIngredients("1 cup pearl barley")
porridge.addIngredients("4 cups water")
porridge.addIngredients("1/2 tsp salt")
porridge.addIngredients("2 tbsp butter")
porridge.addIngredients("1/2 cup milk or cream")
porridge.addIngredients("1/4 cup honey or brown sugar(optional)")

porridge.addInstructions("In a large saucepan, combine the pearl barley, water, and salt. Bring to a boil, then reduce the heat to low and simmer for 45-60 minutes, or until the barley is tender and most of the liquid has been absorbed.")
porridge.addInstructions("Stir in the butter and milk or cream and continue to cook or an additional 5-10 minutes, or until the porridge reaches your desired consistency.")
porridge.addInstructions("Sweeten with honey or brown sugar, if desire, and serve hot.")

book.addRecipe(stew)
book.addRecipe(flatbread)
book.addRecipe(yogurt)
book.addRecipe(porridge)

export default book