import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Pagetitle() {
const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                document.title = "Heng Vathanak | Web Designer - Developer";
                break;
            case "/about":
                document.title = "About | Heng Vathanak - Web Designer | Developer";
                break;
            case "/projects": 
                document.title = "Project | Heng Vathanak - Web Designer | Developer";
                break;
            case "/highlights": 
                document.title = "Highlights | Heng Vathanak - Web Designer | Developer";
                break;
            case "/contact":
                document.title = "Contact | Heng Vathanak - Web Designer | Developer";
                break;
            case "/volunteering/1":
                document.title = "Joined the Celebration of Cambodia as a Volunteer";
                break;
            case "/volunteering/2":
                document.title = "Joined the Cambodia Trade Expo as a Volunteer";
                break;
            case "/highlight/3":
                document.title = "Joined the semester 1 field trip at Tuol Sleng Genocide";
                break;
            case "/highlight/4":
                document.title = "Joined the National Examination";
                break;
            default:
                document.title = "404 | Heng Vathanak - Web Designer | Developer";
        }
    }, [location]);

    return null;
}

export default Pagetitle
