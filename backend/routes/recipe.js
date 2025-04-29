const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe } = require("../controller/recipe")
const router=express.Router()

router.get("/",getRecipes)//get all getRecipes
router.get("/.id",getRecipe) //get recipe by id
router.post("/",getRecipe) //add recipe
router.put("/:id",editRecipe) //editRecipe
router.delete("/:id",deleteRecipe) //deleteRecipe




module.exports=router