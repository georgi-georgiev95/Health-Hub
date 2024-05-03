export interface User {
    _id?: string;
    username: string;
    email: string;
    password: string;
    rePassword?: string;
    likedRecipes: string[];
    likedWorkouts: string[];
    recipeComments: string[];
    workoutComments: string[];
}

export interface UserData {
    username: string;
    email: string;
    password: string;
    rePassword?: string;
}