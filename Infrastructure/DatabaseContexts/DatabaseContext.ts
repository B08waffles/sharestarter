import {Dialect, Sequelize} from "sequelize";
import {Config} from "../../Common/Configurations/Config";

/**
 * A class that represents a connection to a SQLite database using Sequelize.
 */
export class DatabaseContext {
    /**
     * A public property that stores the Sequelize instance.
     */
    public sequelize: Sequelize;

    /**
     * Creates a new instance of DatabaseContext and attempts to connect to the database using the configProp.
     * @param configProp - An instance of Config class that provides the database configuration options.
     */
    public constructor(configProp: Config) {
        // Initialize the Sequelize instance with the dialect and storage options from the configProp
        this.sequelize = new Sequelize({
            dialect: configProp.getDbDriver() as Dialect, storage: configProp.getDbPath()
        });

        // Call the private method to attempt connection and log the result
        this.attemptConnection()
    }

    /**
     * A public method that returns the Sequelize instance.
     * @returns The Sequelize instance.
     */
    public getSequelize(): Sequelize {
        return this.sequelize;
    }

    /**
     * Tries to authenticate the connection to the database and logs the success or failure.
     */
    private attemptConnection(): void {
        try {
            this.sequelize.authenticate().then(() =>
                console.log("Database connection has been established successfully."));
        } catch (e) {
            console.error("Unable to connect to database:", e);
        }
    };

    /**
     * A private method that closes the connection to the database.
     */
    private closeConnection(): void {
        try {
            this.sequelize.close().then(() => console.log("Connection to database has been closed."));
        } catch (e) {
            console.error("Unable to close connection:", e);
        }
    }
}
