import passport = require("passport");
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../../models/user/user";
import * as dotenv from "dotenv";
dotenv.config();

const { CALLBACK_URL } = process.env;

// Configuración de Passport para Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "504491407064-a1lsamb9ulskgdti6cg63vr64kiv2p8c.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: `${CALLBACK_URL}`,
    },
    async (token, tokenSecret, profile, done) => {
      // Verifica si el usuario ya existe en la base de datos

      const user = await User.findOne({
        where: {
          googleId: profile.id,
        },
      });

      if (user) {
        // Si el usuario ya existe, simplemente lo devuelve
        return done(null, user);
      } else {
        // Si el usuario no existe, lo agrega a la base de datos
        const user: User = await User.create({
          userName: profile.username,
          email: profile.emails,
          password: null,
          typeIdentification: null,
          numberIdentification: null,
          rol: "Cliente",
          state: "Activo",
          googleId: profile.id,
          displayName: profile.displayName,
        });
      }
    }
  )
);

// Serialización de usuario
passport.serializeUser((user: any, done) => {
  try {
    done(null, user.id);
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
