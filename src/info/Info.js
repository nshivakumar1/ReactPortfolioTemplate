import self from "../img/self.png"
import mock1 from "../img/mock1.png"
//import mock2 from "../img/mock2.png"
//import mock3 from "../img/mock3.png"
//import mock4 from "../img/mock4.png"
//import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(106,21,81)", "rgb(203,129,158)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Nakul",
    lastName: "Shivakumar",
    initials: "ns", // the example uses first and last, but feel free to use three or more if you like.
    position: "Associate Technical Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎 🇮🇳',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Associate Technical Engineer at Kyndryl"
        },
        {
            emoji: "📧",
            text: "nakulshivakumar84@gmail.com"
        }
    ],
    socials: [

        {
            link: "https://github.com/nshivakumar1",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/nakulshivakumar",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://substack.com/@codeclouddevops/posts",
            icon: "fa fa-substack",
            label: 'substack'
        }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Nakul. I'm an Associate Technical engineer for Kyndryl. I studied MBA from Amity University, I enjoy long walks, cooking, listening to Music and Photography, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
    {
        proficientWith: ['git', 'github', 'Linux', 'Docker', 'Jira Service Management', 'BMC-Control-M', 'ServiceNow', 'BMC-Helix Control-M', 'AWS', 'Azure'],
        exposedTo: ['python']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'photography',
            emoji: '📸'
        },
        {
            label: 'music',
            emoji: '🎧'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "A Basic Implementation of a DevSecOps Project",
            live: "A local Deployment", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/nshivakumar1/devsecops-project.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Build A CI/CD Pipeline with AWS to deploy a Java Web Application",
            live: "Hosted on AWS",
            source: "https://github.com/nshivakumar1/nextwork-web-project.git",
        },

    ]
}