const express=require('express');
const { createMealPlan, getAllMealPlans, getAllMealPlansById, updateMealPlan, deleteMealPlan } = require('../controller/mealplanController');
const { isAuthenticated, allowUsers } = require('../middleware/auth');

const mealplanRouter=express.Router();


//// public routes: anyone can access (no authentication required)
mealplanRouter.get('/',getAllMealPlans)
mealplanRouter.get('/:id',getAllMealPlansById);
// protected routes: only authenticated users can access
mealplanRouter.post('/',isAuthenticated,allowUsers(['user', 'admin']),createMealPlan);
mealplanRouter.put('/:id', updateMealPlan);

// admin only route: only admin users can access
mealplanRouter.delete('/:id',isAuthenticated,allowUsers(['admin']), deleteMealPlan);
module.exports=mealplanRouter;