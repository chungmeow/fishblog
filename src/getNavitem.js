export default function getNavitem(i) {
    const navItems = [
        {path: "/", name: "Home"},
        {path: "/", name: "New Post"},
        {path: "/", name: "Log out"},
        {path: "/", name: "Login"},
        {path: "/", name: "New User"}
    ];
    return navItems[i];
}