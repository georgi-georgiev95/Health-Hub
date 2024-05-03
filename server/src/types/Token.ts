interface authToken {
    userId: string;
    email: string;
    username: string;
}

export interface Token {
    email: string;
    authToken: authToken;
    userId: string;
    username: string;
}