import express from "express";
import {Config} from "./Config";
import {DatabaseContext} from "../../Infrastructure/DatabaseContexts/DatabaseContext";
import sessions from "express-session";
import {cookieExpiry} from "../Constants/cookieExpiry";
import cookieParser from "cookie-parser";
import cors from "cors";

/**
 * A class that represents an Express app.
 */
export class ShareStarterApplication {
    /**
     * An instance of the Config class.
     */
    readonly config: Config;
    /**
     * An instance of the Express app.
     */
    private app: express.Application;
    /**
     * An instance of the DatabaseContext class.
     */
    private databaseContext: DatabaseContext;

    /**
     * The constructor of the class initializes the properties of the class.
     */
    public constructor() {
        this.app = express();

        // Instantiates the Config class.
        this.config = Config.getInstance();

        // Parsing the incoming data
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        // Set up the session cookie authentication system
        this.app.use(sessions({
            secret: this.config.getSecret(), saveUninitialized: true, cookie: {maxAge: cookieExpiry}, resave: false
        }));

        // Cookie parser middleware
        this.app.use(cookieParser());

        // Cross-origin reference scripting protection setup
        this.app.use(cors({
            origin: `http://localhost:${this.config.getPort()}/`,
            optionsSuccessStatus: 200 // Some legacy browsers choke on 204
        }));

        // Pass the instantiated Config class as a param/prop to a new DatabaseContext class.
        this.databaseContext = new DatabaseContext(this.config);
    }

    /**
     * A method that starts the server.
     */
    public start(): void {
        this.app.listen(this.config.getPort(), (): void => {
            console.log(`Server listening on port ${this.config.getPort()}`);
        });
    }
}