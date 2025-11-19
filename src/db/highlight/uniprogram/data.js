import chief1 from "../../../inc/img/practical/chiefbank/chiefbank01.jpg";
import chief2 from "../../../inc/img/practical/chiefbank/chiefbank02.jpg";
import chief3 from "../../../inc/img/practical/chiefbank/chiefbank03.jpg";
import chief4 from "../../../inc/img/practical/chiefbank/chiefbank04.jpg";

import firstc1 from "../../../inc/img/practical/firstcambodia/first01.jpg";
import firstc2 from "../../../inc/img/practical/firstcambodia/first02.jpg";
import firstc3 from "../../../inc/img/practical/firstcambodia/first03.jpg";
import firstc4 from "../../../inc/img/practical/firstcambodia/first04.jpg";
import firstc5 from "../../../inc/img/practical/firstcambodia/first05.jpg";

import y2s1fieldtrip1 from "../../../inc/img/fieldtrip/nationalmuseum/nationalmuseum1.png";
import y2s1fieldtrip2 from "../../../inc/img/fieldtrip/nationalmuseum/nationalmuseum2.png";
import y2s1fieldtrip3 from "../../../inc/img/fieldtrip/nationalmuseum/nationalmuseum3.png";
import y2s1fieldtrip4 from "../../../inc/img/fieldtrip/nationalmuseum/nationalmuseum4.png";



function uni_highlight1 () {
    return {
        date: "8 October 2024",
        title: "Joined the National Examination",
        program: "High School Program",
        description: "8 October 2024 was a special day when all Grand-12 students gathered to take the national exam. After years of preparation, they faced the test with focus and determination. For many, it was not just an exam but a key step toward their future. And I really was excited that I can did it well with all of grade-12 students. Especially, I got C of my national examination.",
        images: null,
    }
}

function uni_highlight2 () {
    return {
        date: "19 February 2025",
        title: "Joined the semester 1 field trip at Tuol Sleng Genocide",
        program: "University Program",
        description: "On this field trip, I went to Tuol Sleng Genocide on BEITEI International University's program in order to visit, learn, experience and share about cambodia's history.",
        images: null,
    }
}

function uni_highlight3 () {
    return {
        date: "18 March 2025",
        title: "Joined the practical training at Chief Commercial Bank Plc.",
        program: "University Program",
        description: "On March 18, 2025, I went to Chief Commercial Bank in Phnom Penh with my teacher. We visited their office on National Road No. 1 to learn about how the bank works. The bank staff showed us their daily work and explained how they use computers and technology in banking. I got to see real banking operations and learn new things about IT in banks. It was a very useful experience that helped me understand banking better.",
        images: [ chief1, chief2, chief3, chief4],
    }
}

function uni_highlight4 () {
    return {
        date: "19 March 2025",
        title: "Joined the practical training at First Cambodia Co. Ltd",
        program: "University Program",
        description: "On March 19, I completed practical training at First Cambodia Co. Ltd through my university program. This hands-on experience gave me real-world insight into business operations and professional workplace environments. The training strengthened my practical skills and helped bridge the gap between academic knowledge and professional application.",
        images: [ firstc1, firstc2, firstc3, firstc4, firstc5],
    }
}

function uni_highlight5 () {
    return {    
        date: "15 Nov 2025",
        title: "Joined the semester 1 of year 2 field trip at The National Museum of Cambodia",
        program: "University Program",
        description: "On November 15, I joined the semester 1 of year 2 flied trip at National Museum of Cambodia to learn more about the history of khmer Culture and Empire.",
        images: [ y2s1fieldtrip1, y2s1fieldtrip2, y2s1fieldtrip3, y2s1fieldtrip4],
    }
}

const uni_highlights = [ uni_highlight1, uni_highlight2, uni_highlight3, uni_highlight4, uni_highlight5];

export default uni_highlights;