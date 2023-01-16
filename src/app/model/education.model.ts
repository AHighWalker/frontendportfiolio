export class education {

    idEdu?: number;
    titleEdu: String;
    descriptionEdu: String;
    dateEdu: string;
    pictureEdu: String;

    constructor( titleEdu: String, descriptionEdu: String, dateEdu: string, pictureEdu: String) {
        this.titleEdu = titleEdu;
        this.descriptionEdu = descriptionEdu;
        this.dateEdu = dateEdu;
        this.pictureEdu = pictureEdu
    }

}
