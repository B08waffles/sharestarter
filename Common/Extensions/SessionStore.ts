import SequelizeStore from "connect-session-sequelize-typescript";
import session from "express-session";
import {DatabaseContext} from "../../Infrastructure/DatabaseContexts/DatabaseContext";
import {cookieExpiry} from "../Constants/cookieExpiry";

/**
 * A class that extends the SequelizeStore class from connect-session-sequelize-typescript module.
 * This class provides a session store using Sequelize.js, which is an ORM for various SQL databases.
 * It uses the DatabaseContext class to get the Sequelize instance and the cookieExpiry constant to set the expiration and check interval of the sessions.
 */
export class SessionStore extends SequelizeStore(session.Store) {
    /**
     * The constructor of the SessionStore class.
     * It calls the super constructor with the db, expiration, and checkExpirationInterval options.
     * It also invokes the sync method to create or update the session table in the database.
     * @param databaseContext - An instance of the DatabaseContext class that provides access to the Sequelize instance.
     */
    public constructor(databaseContext: DatabaseContext) {
        super({
            db: databaseContext.getSequelize(), // Pass the Sequelize instance from the database context
            checkExpirationInterval: cookieExpiry / 12, // Set the interval at which to clean up expired sessions in milliseconds
            expiration: cookieExpiry, // Set the maximum age (in milliseconds) of a valid session
        });
        this.sync(); // Sync the session store with the database
    }
}
