enum DifficultyLevel {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard",
}

export interface Workout {
    _id?: string
    name: string
    difficultyLevel: DifficultyLevel
    goal: string
    description: string
    owner: string
    comments: string[]
    likedBy: string[]
    dislikedBy: string[]
}