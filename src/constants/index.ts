import { StringType, UserLinksType } from "../types";

const userName: StringType = "Jessica Randall";
const userLocation: StringType = "London, United Kingdom";
const userInfo: StringType = '"Front-end developer and avid reader."';
const userLinks: UserLinksType[] = [
    {
        id: 1,
        linkName: "GitHub",
        href: "#"
    },
    {
        id: 2,
        linkName: "Frontend Mentor",
        href: "#"
    },
    {
        id: 3,
        linkName: "LinkedIn",
        href: "#"
    },
    {
        id: 4,
        linkName: "Twitter",
        href: "#"
    },
    {
        id: 5,
        linkName: "Instagram",
        href: "#"
    },
];

export {
    userName, 
    userLocation,
    userInfo,
    userLinks
}