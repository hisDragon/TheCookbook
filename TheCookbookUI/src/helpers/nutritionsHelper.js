export const handleNutritionChange = (nutritions, setNutritions, field, value) => {
    const updated = [...nutritions];
    updated[field] = value;
    setNutritions(prevFormData => ({ ...prevFormData, nutritions: updated }));
};