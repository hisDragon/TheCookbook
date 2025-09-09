import React from 'react'
import { handleNutritionChange } from '../helpers/nutritionsHelper'

const NutritionForm = ({ nutritions, setNutritions }) => {
    return (
        <div className="flex flex-col gap-4">
            {/* Nutritions List */}
            <div className="text-sm flex flex-col gap-4">
                {/* Calories */}
                <div className="flex items-center gap-2">
                    <label className="block w-32 font-bold">Calorie</label>
                    <input
                        type="text"
                        value={nutritions.calories}
                        onChange={(e) =>
                            handleNutritionChange(nutritions, setNutritions, "calories", e.target.value)
                        }
                        className="w-30 text-sm border border-secondary outline-none rounded p-2"
                    />
                </div>

                {/* Protein */}
                <div className="flex items-center gap-2">
                    <label className="block w-32 font-bold">Protein</label>
                    <input
                        type="text"
                        value={nutritions.protein}
                        onChange={(e) =>
                            handleNutritionChange(nutritions, setNutritions, "protein", e.target.value)
                        }
                        className="w-30 text-sm border border-secondary outline-none rounded p-2"
                    />
                </div>

                {/* Carbohydrates */}
                <div className="flex items-center gap-2">
                    <label className="block w-32 font-bold">Carbohydrates</label>
                    <input
                        type="text"
                        value={nutritions.carbohydrates}
                        onChange={(e) =>
                            handleNutritionChange(
                                nutritions,
                                setNutritions,
                                "carbohydrates",
                                e.target.value
                            )
                        }
                        className="w-30 text-sm border border-secondary outline-none rounded p-2"
                    />
                </div>

                {/* Sugar */}
                <div className="flex items-center gap-2">
                    <label className="block w-32 font-bold">Sugar</label>
                    <input
                        type="text"
                        value={nutritions.sugar}
                        onChange={(e) =>
                            handleNutritionChange(nutritions, setNutritions, "sugar", e.target.value)
                        }
                        className="w-30 text-sm border border-secondary outline-none rounded p-2"
                    />
                </div>

                {/* Salt */}
                <div className="flex items-center gap-2">
                    <label className="block w-32 font-bold">Salt</label>
                    <input
                        type="text"
                        value={nutritions.salt}
                        onChange={(e) =>
                            handleNutritionChange(nutritions, setNutritions, "salt", e.target.value)
                        }
                        className="w-30 text-sm border border-secondary outline-none rounded p-2"
                    />
                </div>

                {/* Energy */}
                <div className="flex items-center gap-2">
                    <label className="block w-32 font-bold">Energy</label>
                    <input
                        type="text"
                        value={nutritions.energy}
                        onChange={(e) =>
                            handleNutritionChange(nutritions, setNutritions, "energy", e.target.value)
                        }
                        className="w-30 text-sm border border-secondary outline-none rounded p-2"
                    />
                </div>

                {/* Fat */}
                <div className="flex items-center gap-2">
                    <label className="block w-32 font-bold">Fat</label>
                    <input
                        type="text"
                        value={nutritions.fat}
                        onChange={(e) =>
                            handleNutritionChange(nutritions, setNutritions, "fat", e.target.value)
                        }
                        className="w-30 text-sm border border-secondary outline-none rounded p-2"
                    />
                </div>
            </div>
        </div>
    )
}

export default NutritionForm