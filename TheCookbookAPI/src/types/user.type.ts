import mongoose from "mongoose"

type UserType = {
    _id: mongoose.Schema.Types.ObjectId;
    userName: string;
    password: string;
    numberOfRecipes: number;
}

export default UserType;