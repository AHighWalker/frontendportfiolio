export class projects{
    idProject?: number;
    titleProject: String;
    descriptionProject: String;
    pictureProject: String;
    linkProject: String;

    constructor( titleProject: String, descriptionProject: String,
        pictureProject: String, linkProject: String){
            this.titleProject = titleProject;
            this.descriptionProject = descriptionProject;
            this.pictureProject = pictureProject;
            this.linkProject = linkProject;
    }
}