class Share {
    private static totalShares = 0;
    private static totalHours = 0;

    private readonly hours: number;
    private readonly id: number;

    constructor(hours: number) {
        this.hours = hours;
        Share.totalHours += hours;
        Share.totalShares += 1;
        this.id = Share.totalShares;
    }

    public get dilutedShares(): number {
        return Share.totalHours / this.hours;
    }

    public get idOfShare(): number {
        return this.id;
    }
}