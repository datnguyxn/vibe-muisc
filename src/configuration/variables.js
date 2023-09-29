import dotenv from "dotenv";

dotenv.config();

const variables = {
    PORT: process.env.PORT || 3000,
    URL: process.env.URL || "http://localhost:3000",
    MONGO_URI: process.env.DATABASE_URL,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_TOKEN,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_TOKEN,
    JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_TOKEN_LIFE,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.MAIL,
    SMTP_PASSWORD: process.env.MAIL_PASSWORD,
}

export default variables;