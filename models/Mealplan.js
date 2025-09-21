const mongoose = require('mongoose');

const mealplanSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    dietType: {
        type: String,
        enum: ['Vegetarian', 'Balanced', 'Low-Carb', 'High-Protein']
    },
    meals: [{
        mealType: {
            type: String,
            enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']
        },
        name: String,
        calories: Number,
        protein: Number,
        carbs: Number,
        fat: Number
    }]
}, { timestamps: true });


module.exports = mongoose.model('Mealplan', mealplanSchema, 'mealplans');