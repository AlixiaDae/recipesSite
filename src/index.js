import { Cookbook } from './pages/cookbookModule'
import initializeWebsite from './pages/mainpage'
import { Recipe } from './pages/recipeClass'
import './style.css'

initializeWebsite()

const flatbread = new Recipe("Viking Flatbread")
const stew = new Recipe("Hearty Viking Stew")
stew.addIngredients("1 lb beef or venison, cubed")
stew.addIngredients("2 onions, chopped")
stew.addIngredients("3 carrots, chopped")
/*
1 lb beef or venison, cubed
2 onions, chopped
3 carrots, chopped
2 parsnips, chopped
2 turnips, chopped
4 cups beef broth
2 tbsp butter
1 tbsp salt
1 tsp ground black pepper
1 tsp dried thyme
1 tsp dried sage*/
console.log(stew)

const cookBook = new Cookbook()
cookBook.addRecipe(stew)
cookBook.addRecipe(flatbread)
console.log(cookBook.getRecipe(stew.getIngredients()))