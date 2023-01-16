export class softSkills{
    idSS?: number;
    titleSS: String;
    percentageSS: number;
    pictureSS: String;

    constructor (titleSS: String, percentageSS: number, pictureSS: String){
        this.titleSS = titleSS;
        this.percentageSS = percentageSS;
        this.pictureSS = pictureSS;
    }
}