import moclogo from "../../../inc/img/work/logo/ministryofcambodia.png";
import cclogo from "../../../inc/img/work/logo/celebratingcambodia.png";

import moc1 from "../../../inc/img/work/activities/moc/moc1.png";
import moc2 from "../../../inc/img/work/activities/moc/moc2.png";
import moc3 from "../../../inc/img/work/activities/moc/moc3.png";
import moc4 from "../../../inc/img/work/activities/moc/moc4.png";
import moc5 from "../../../inc/img/work/activities/moc/moc5.png";
import moc6 from "../../../inc/img/work/activities/moc/moc6.png";
import moc7 from "../../../inc/img/work/activities/moc/moc7.png";

import cc1 from "../../../inc/img/work/activities/cc/cc1.png";
import cc2 from "../../../inc/img/work/activities/cc/cc2.png";
import cc3 from "../../../inc/img/work/activities/cc/cc3.png";
import cc4 from "../../../inc/img/work/activities/cc/cc4.png";
import cc5 from "../../../inc/img/work/activities/cc/cc5.png";
import cc6 from "../../../inc/img/work/activities/cc/cc6.png";
import cc7 from "../../../inc/img/work/activities/cc/cc7.png";




function work_volunteer1 () {
    return {
        date: "13 Dev 2024 - 16 Dec 2024",
        logo: moclogo,
        title: "Cambodia Trade Expo",
        subtitle: "Joined the Cambodia Trade Expo as a Volunteer",
        program: "Ministry of Commerce",
        position: "A group of young volunteers",
        description: "I've joined the Cambodia Trade Expo as a volunteer in role as Event/Booth Exhibition Team.",
        demo: "View more",
        images: [moc1, moc2, moc3, moc4, moc5, moc6, moc7],
    }
}

function work_volunteer2 () {
    return {
        date: "31 Dev 2024 - 1 Jan 2025",
        logo: cclogo,
        title: "Celebrating Cambodia",
        subtitle: "Joined the Celebration of Cambodia as a Volunteer",
        program: "National Event",
        position: "A group of young volunteers",
        description: "I've joined the Celebrating Cambodia event as a volunteer to support this special occasion. I want all Cambodians to see and recognize that the Celebrating Cambodia event is something meaningful and proudly made in Cambodia.",
        demo: "View more",
        images: [cc1, cc2, cc3, cc4, cc5, cc6, cc7],
    }
}

const vonlunteering = [ work_volunteer2, work_volunteer1];

export default vonlunteering;