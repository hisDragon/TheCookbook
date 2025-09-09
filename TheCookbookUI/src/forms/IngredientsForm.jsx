import React from 'react'
import { Dropdown, DropdownItem } from "flowbite-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import { handleIngredientChange, addIngredientField, removeIngredientField, moveIngredient } from '../helpers/ingredientsHelper';

const IngredientsForm = ({ ingredients, setIngredients }) => {
    return (
        <div>
            {/* Ingredients List */}
            {ingredients.map((ing, index) => (
                <div key={index} className="text-sm flex gap-3 mb-5">
                    {/* Move Up button */}
                    <button
                        type="button"
                        onClick={() => moveIngredient(ingredients, setIngredients, index, "up")}
                        disabled={index === 0}
                        className="cursor-pointer text-primary hover:text-primary-offset disabled:text-secondary disabled:cursor-not-allowed"
                    >
                        <FaChevronCircleUp className="w-6 h-6" />
                    </button>

                    {/* Move Down button */}
                    <button
                        type="button"
                        onClick={() => moveIngredient(ingredients, setIngredients, index, "down")}
                        disabled={index === ingredients.length - 1}
                        className="cursor-pointer text-primary hover:text-primary-offset disabled:text-secondary disabled:cursor-not-allowed"
                    >
                        <FaChevronCircleDown className="w-6 h-6" />
                    </button>

                    <Accordion className="rounded-lg basis-248">
                        <AccordionPanel>
                            <AccordionTitle className="h-3 border-b-0">
                                <a
                                    onClick={() => removeIngredientField(ingredients, setIngredients, index)}
                                    className="cursor-pointer font-semibold text-red-500 hover:text-red-700">
                                    Remove
                                </a>
                            </AccordionTitle>
                            <AccordionContent>
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                                    {/* Ingredient name */}
                                    <input
                                        type="text"
                                        placeholder="Ingredient"
                                        value={ing.name}
                                        onChange={(e) =>
                                            handleIngredientChange(ingredients, setIngredients, index, "name", e.target.value)
                                        }
                                        className="flex-grow border border-secondary outline-none rounded p-2"
                                    />
                                    {/* Quantity */}
                                    <input
                                        type="number"
                                        placeholder="Quantity"
                                        value={ing.quantity}
                                        onChange={(e) =>
                                            handleIngredientChange(ingredients, setIngredients, index, "quantity", e.target.value)
                                        }
                                        className="w-24 border border-secondary outline-none rounded p-2"
                                    />

                                    {/* Unit */}
                                    <Dropdown label={ing.quantityType || "Units"} inline >
                                        <DropdownItem onClick={() => handleIngredientChange(ingredients, setIngredients, index, "quantityType", "grams")}>grams</DropdownItem>
                                        <DropdownItem onClick={() => handleIngredientChange(ingredients, setIngredients, index, "quantityType", "kilograms")}>kilograms</DropdownItem>
                                        <DropdownItem onClick={() => handleIngredientChange(ingredients, setIngredients, index, "quantityType", "millilitres")}>millilitres</DropdownItem>
                                        <DropdownItem onClick={() => handleIngredientChange(ingredients, setIngredients, index, "quantityType", "liters")}>liters</DropdownItem>
                                        <DropdownItem onClick={() => handleIngredientChange(ingredients, setIngredients, index, "quantityType", "bunch")}>bunch</DropdownItem>
                                        <DropdownItem onClick={() => handleIngredientChange(ingredients, setIngredients, index, "quantityType", "piece")}>piece</DropdownItem>
                                    </Dropdown>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>

            ))}
            <button
                type="button"
                onClick={() => addIngredientField(ingredients, setIngredients)}
                className="text-primary text-sm font-semibold cursor-pointer mb-4"
            >
                + Add Ingredient
            </button>

        </div>


    )
}

export default IngredientsForm