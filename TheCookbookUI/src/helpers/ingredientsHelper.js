export const handleIngredientChange = (ingredients, setIngredients, index, field, value) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(prevFormData => ({ ...prevFormData, ingredients: updated }));
};

export const addIngredientField = (ingredients, setIngredients) => {
    setIngredients(prevFormData => ({
        ...prevFormData,
        ingredients: [
            ...ingredients,
            { name: "", quantity: "", quantityType: "" },
        ],
    }));
};

export const removeIngredientField = (ingredients, setIngredients, index) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(prevFormData => ({ ...prevFormData, ingredients: updated }));
};

export const moveIngredient = (ingredients, setIngredients, index, direction) => {
    const newIngredient = [...ingredients];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newIngredient.length) return;

    //Swaping
    [newIngredient[index], newIngredient[targetIndex]] = [
        newIngredient[targetIndex],
        newIngredient[index],
    ];
    setIngredients(prevFormData => ({ ...prevFormData, ingredients: newIngredient }));
};