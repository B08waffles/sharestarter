import dotenv from 'dotenv';

/**
 * A class that is used to provide runtime variables for the application.
 */
export class Config {
    /**
     * A static method that returns an instance of the class.
     * @returns An instance of the Config class.
     */
    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    /**
     * The constructor of the class initializes the properties of the class with values from environment variables using the dotenv package.
     */
    private constructor() {
        dotenv.config();
        this.port = parseInt(process.env.PORT || '3000', 10);
        this.dbHost = process.env.DB_HOST || 'localhost';
        this.dbUser = process.env.DB_USER || 'root';
        this.dbPass = process.env.DB_PASS || 'password';
        this.dbDriver = process.env.DB_Driver || "sqlite";
        this.dbPath = process.env.DB_PATH || "Infrastructure/DatabaseContexts/myShares.sqlite";
        this.debug = process.env.DEBUG === "true";
        this.appSecret = process.env.SECRET || "thisIsMySecretKey";
    }

    /**
     * A property that represents the session cookie secret.
     */
    private readonly appSecret: string;

    /**
     * A property that represents if this app is in debug mode
     */
    private readonly debug: boolean;

    /**
     * A property that represents the port number.
     */
    private readonly port: number;

    /**
     * A property that represents the database host.
     */
    private readonly dbHost: string;

    /**
     * A property that represents the database user.
     */
    private readonly dbUser: string;

    /**
     * A property that represents the database password.
     */
    private readonly dbPass: string;

    /**
     * A property that represents the database driver.
     */
    private readonly dbDriver: string;

    /**
     * A property that represents the path to the database.
     */
    private readonly dbPath: string;

    /**
     * An instance of the Config class.
     */
    private static instance: Config;

    /**
     * A method that returns the port number.
     * @returns The port number.
     */
    public getPort(): number {
        return this.port;
    }

    /**
     * A method that returns the database host.
     * @returns The database host.
     */
    public getDbHost(): string {
        return this.dbHost;
    }

    /**
     * A method that returns the database user.
     * @returns The database user.
     */
    public getDbUser(): string {
        return this.dbUser;
    }

    /**
     * A method that returns the database password.
     * @returns The database password.
     */
    public getDbPass(): string {
        return this.dbPass;
    }

    /**
     * A method that returns the database driver.
     * @returns The database driver.
     */
    public getDbDriver(): string {
        return this.dbDriver;
    }

    /**
     * A method that returns the database path.
     * @returns The database path.
     */
    public getDbPath(): string {
        return this.dbPath;
    }

    /**
     * A method that returns whether the app is in debug or not.
     * @returns Debug status, true or false.
     */
    public getDebug(): boolean {
        return this.debug;
    }

    /**
     * A method that returns the session secret.
     * @returns The secret hash.
     */
    public getSecret(): string {
        return this.appSecret
    }
}
