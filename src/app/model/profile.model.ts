export class profile{

    idProfile?: number;
    nameProfile: String;
    descriptionProfile: String;
    locationProfile: String;
    pictureProfile: String;
    bannerProfile: String;

    constructor( nameProfile: String, descriptionProfile: String, 
        locationProfile: String, pictureProfile: String, bannerProfile: String){
        
        this.nameProfile = nameProfile;
        this.descriptionProfile = descriptionProfile;
        this.locationProfile = locationProfile;
        this.pictureProfile = pictureProfile;
        this.bannerProfile = bannerProfile;
    }

}