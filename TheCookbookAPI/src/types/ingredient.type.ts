import QuantityTypeEnum from "./enums/ingredient.quantityType.enum";

type IngredientType = {
    name: string;
    quantity: number;
    quantityType: QuantityTypeEnum;
}

export default IngredientType;