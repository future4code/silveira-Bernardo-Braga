
export default class UserModel {

    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private participation: number,
        private percent: number
    ) { }

    public getPercent(): number { return this.percent; }
    public setPercent(value: number) { this.percent = value; }

    public getFirstName(): string { return this.firstName; }
    public setFirstName(value: string) { this.firstName = value; }

    public getLastName(): string { return this.lastName; }
    public setLastName(value: string) { this.lastName = value; }

    public getParticipation(): number { return this.participation; }
    public setParticipation(value: number) { this.participation = value; }

    public getId(): string { return this.id; }
    public setId(value: string) { this.id = value; }

}