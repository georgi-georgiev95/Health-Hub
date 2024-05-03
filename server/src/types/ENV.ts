export interface ENV {
    PORT: string;
    MONGO_URI: string;
    CLIENT_URL: string;
    SECRET: string;
    COOKIE_NAME: string;
    config: () => Promise<void>;  
}