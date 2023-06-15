import {Dialect, Sequelize} from "sequelize";
import {Config} from "../../Common/Configurations/Config";

/**
 * A class that represents a connection to a SQLite database using Sequelize.
 */
export class DatabaseContext {
    /**
     * Creates a new instance of DatabaseContext and attempts to connect to the database using the configProp.
     * @param configProp - An instance of Config class that provides the database configuration options.
     */
    public constructor(configProp: Config) {
        // Initialize the Sequelize instance with the dialect and storage options from the configProp
        this.sequelize = new Sequelize({
            dialect: configProp.getDbDriver() as Dialect,
            storage: configProp.getDbPath()
        });

        // Call the private method to attempt connection and log the result
        this.attemptConnection().then(() => console.log("DatabaseContext has been instantiated"));
    }

    /**
     * A public property that stores the Sequelize instance.
     */
    public sequelize: Sequelize;

    /**
     * Tries to authenticate the connection to the database and logs the success or failure.
     * @returns A promise that resolves to void if the connection is successful, or rejects with an error if not.
     */
    private async attemptConnection(): Promise<void> {
        try {
            // Await for the authenticate method of Sequelize to resolve
            await this.sequelize.authenticate();
            // Log a success message
            console.log("Database connection has been established successfully.");
        } catch (e) {
            // Log an error message
            console.error("Unable to connect to database:", e);
        }
    };

    /**
     * A private method that closes the connection to the database.
     */
    private closeConnection(): void {
        this.sequelize.close().then(() => console.log("Connection to database has been closed."));
    }
}
