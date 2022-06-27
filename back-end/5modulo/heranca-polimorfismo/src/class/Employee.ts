import { User } from './User';

export class Employee extends User {
    private admissionDate: string;
    private baseSalary: number;

    constructor(salary: number, admissionDate: string, id: string, email: string, name: string, password: string) {

        super(id, email, name, password);

        this.admissionDate = admissionDate;
        this.baseSalary = salary;


    }
    public getAdmissionDate(): string {
        return this.admissionDate;
    }
    public setAdmissionDate(value: string) {
        this.admissionDate = value;
    }
    public getBaseSalary(): number {
        return this.baseSalary;
    }
    public setBaseSalary(value: number) {
        this.baseSalary = value;
    }
}