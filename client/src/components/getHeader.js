export default function getHeader(i) {
    const header = {
        '/': {
                imgPath: {backgroundImage: "url('img/home-bg.jpg')"},
                headingType: "site-heading",
                headingTitle: "The Fishy Blog",
                subheading: "So Fishy Fishy"
        },
        '/about': {
                imgPath: {backgroundImage: "url('img/home-bg.jpg')"},
                headingType: "page-heading",
                headingTitle: "About Me",
                subheading: "This is what I do."
        },
        '/contact': {
                    imgPath: {backgroundImage: "url('img/contact-bg.jpg')"},
                    headingType: "page-heading",
                    headingTitle: "Contact Me",
                    subheading: "Have questions? I have answers."
        },
        '/post': {
                    imgPath: {backgroundImage: "url('img/post-bg.jpg')"},
                    headingType: "post-heading",
                    headingTitle: "post title",
                    subheading: "post body"
        }
    };
    return header[i];
}