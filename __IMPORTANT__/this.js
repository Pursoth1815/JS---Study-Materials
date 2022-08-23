const course = {
    name : "Puli",
    title : "JS",
    language : ["Tamil","English","Telungu"],
    showVideo() {
        this.language.forEach((lang) => {
            console.log(
            `Name : ${this.name}, Title : ${this.title} - ${lang.toLocaleUpperCase()}`);
        });
    },
};

course.showVideo();