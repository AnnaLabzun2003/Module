import { IShow } from "../Interface/IShow";
export class Calculation implements IShow{
    info: string = ""
    show(n:string)
    {
        this.info = "Інформація про кількість студентів " + n;
    }
}