export interface Recipe {
    _id?: string
    name: string
    difficultyLevel: string
    imageUrl: string
    ingredients: string
    description: string
    owner: string
    comments: string[]
    likedBy: string[]
    dislikedBy: string[]
}