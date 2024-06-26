enum DifficultyLevel {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard",
}

export interface Recipe {
    _id?: string
    name: string
    difficultyLevel: DifficultyLevel
    imageUrl: string
    ingredients: string
    description: string
    owner: string
    comments: string[]
    likedBy: string[]
    dislikedBy: string[]
}