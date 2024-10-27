// config.js
const config = {
    siteTitle: "Long Huỳnh(Perfidanb)-info",
    navLogo: "Perfidanb Info",
    navLinks: [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" },
        { text: "Contact", href: "#contact" }
    ],
    hero: {
        title: "Long Huỳnh",
        typedStrings: [
            "Develop",
            "Game Development, Web Development."
        ],
        ctaButton: "Contact Me",
        secondaryButton: "View Projects"
    },
    about: {
        title: "About Me",
        description: "Founder of <span class='highlight'>Lotus Dev Hub</span>, pushing the boundaries of your industry. Specializing in your key skills and offerings.",
        mission: "Your mission statement goes here.",
        techStack: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5", "Skill 6"]
    },
    skills: {
        title: "Tech Arsenal",
        skillsList: [
            { icon: "fab fa-java", name: "Java" },
            { icon: "fab fa-python", name: "Python" },
            { icon: "fas fa-database", name: "SQL" },
            { icon: "fas fa-code", name: "Skript" },
            { icon: "fab fa-php", name: "PHP" },
            { icon: "fas fa-cubes", name: "Minecraft Development" }
        ]
    },
    projects: {
        title: "My Projects",
        projectsList: [
            {
                title: "Crack Orecauldron",
                description: "Khá khó.",
                image: "project1.jpg",
                link: ""
            },
            {
                title: "Code Plugin KKS",
                description: "Kho khoáng sản MC",
                image: "project2.jpg",
                link: ""
            },
            {
                title: "Tool Spam SMS",
                description: "Tool spam sms By Long.",
                image: "project3.jpg",
                link: ""
            }
            // Add more projects as needed
        ]
    },
    contact: {
        title: "Get in Touch",
        email: {
            icon: "fas fa-envelope",
            title: "Email",
            value: "your.email@example.com"
        },
        discord: {
            icon: "fab fa-discord",
            title: "Discord",
            value: "Join Our Community",
            link: "https://discord.gg/your-discord-link"
        },
        github: {
            icon: "fab fa-github",
            title: "GitHub",
            value: "Your-GitHub-Username",
            link: "https://github.com/Your-GitHub-Username"
        }
    },
    footer: {
        copyright: "© 2024 Long Huỳnh - Lotus Dev Hub. All rights reserved.",
        socialLinks: [
            { icon: "fab fa-linkedin", link: "https://linkedin.com/in/your-profile" },
            { icon: "fab fa-github", link: "https://github.com/your-username" },
            { icon: "fab fa-twitter", link: "https://twitter.com/your-username" }
        ]
    }
};