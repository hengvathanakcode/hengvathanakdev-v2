import akchs from "../../inc/img/education/akchighschool.png";
import belteiiu from "../../inc/img/education/belteiiu.png";

function education1 () {
    return {
        title: "Angkor Chum High School",
        date: "1 Nov 2019 - 8 Oct 2024",
        description: "Graduated at Angkor Chum High School as A General Knowlegde Student",
        image: akchs,
        classname: "education-img-1",
        link: "https://web.facebook.com/profile.php?id=100065330416047",
    }
}

function education2 () {
    return {
        title: "BELTEI International University",
        date: "24 Nov 2024 - Present",
        description: "A Software Engineering Student of Faculty Information Technology and Scicence at BELTEI International University",
        image: belteiiu,
        classname: "education-img-2",
        link: "https://www.beltei.edu.kh/biu"
    }
}

const educations = [education2, education1];

export default educations;