export class experience{
    idExp? : number;
    titleExp: String;
    descriptionExp: String;
    sinceExp: string;
    untilExp: string;
    pictureExp: String;
    locationExp: String;    

    constructor ( titleExp: String, descriptionExp: String,sinceExp: string, untilExp: string, pictureExp:String, locationExp: String){
            
            this.titleExp = titleExp;
            this.descriptionExp = descriptionExp;
            this.sinceExp = sinceExp;
            this.untilExp =  untilExp;
            this.locationExp = locationExp;
            this.pictureExp = pictureExp
        }
}