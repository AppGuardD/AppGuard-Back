import { RequestHandler } from "express";
import passport = require("passport");
import {
    StrategyOptions,
    Strategy as GoogleStrategy,
} from "passport-google-oauth20";
import { User } from "../../models/user/user";
import * as dotenv from "dotenv";
import { generateJWT } from "../../helper/jwt/jwt";
dotenv.config();

interface GoogleStrategyOptions extends StrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
}

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
        } as GoogleStrategyOptions,
        async (token, tokenSecret, profile, done) => {
            try {
                // Verifica si el usuario ya existe en la base de datos
                const user = await User.findOne({
                    where: {
                        googleId: profile.id,
                    },
                });

                const token = generateJWT({
                    userId: profile.id,
                    email: profile._json.email,
                });

                // Si el usuario ya existe, simplemente lo devuelve
                if (!user) {
                    // Si el usuario no existe, lo agrega a la base de datos
                    const user = await User.create({
                        userName: profile._json.name,
                        email: profile._json.email,
                        password: "",
                        typeIdentification: "DNI",
                        numberIdentification: "",
                        rol: "Cliente",
                        state: "Activo",
                        googleId: profile.id,
                        displayName: profile.displayName,
                    });
                    const userT = { user: user, token: token };

                    return done(null, userT);
                }
                const userT = { user: user, token: token };
                return done(null, userT);
            } catch (error: any) {
                return done(error);
            }
        },
    ),
);

// Serialización de usuario
passport.serializeUser((user: any, done) => {
    try {
        done(null, user.user.id);
    } catch (error) {
        done(error, null);
    }
});

passport.deserializeUser(async (id: number, done) => {
    try {
        const user = await User.findOne({
            where: {
                id: id,
            },
        });
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export const authGoogle: RequestHandler = async (req, res) => {
    const { user, token } = req.user as any;
    return res.status(200).send({ user: user, token: token });
};

