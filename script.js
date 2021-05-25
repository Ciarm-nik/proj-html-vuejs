new Vue({
    el: "#app",
    data: {
        navbarLinks: [{
            // Dropdown menu Home
            text: "Home",
            link: "#",
            childs: [
                {
                    text: "1",
                    link: "#",
                },
                {
                    text: "2",
                    link: "#",
                },
                {
                    text: "3",
                    link: "#",
                },
            ]
        },
        {
            // Dropdown menu Services
            text: "Services",
            link: "#"
        },
        {
            text: "Why Us",
            link: "#"
        },
        {
            text: "Case Studies",
            link: "#"
        },
        {
            text: "About",
            link: "#"
        },
        {
            text: "Blog",
            link: "#"
        },
        // Icon + numero(text)
        {
            icon: "fa-phone",
            text: "(555) 802-1234",
            link: ""
        },
        // Button
        {
            // text: "Free Quote",
            // link: "#",
            // button: "button"
        }],
        footerLinks: {
            services: [{
                text: "Marketing Plan",
                link: "#"
            },
            {
                text: "Sales Development",
                link: "#"
            },
            {
                text: "Digital Marketing",
                link: "#"
            },
            {
                text: "Pricing",
                link: "#"
            },
            {
                text: "Why Us",
                link: "#"
            },
            {
                text: "Case Studies",
                link: "#"
            },
            ],
            resources: [{
                text: "Learning Center",
                link: "#"
            },
            {
                text: "Video Tutorials",
                link: "#"
            },
            {
                text: "Customers",
                link: "#"
            },
            {
                text: "Blog",
                link: "#"
            },
            ],
            company: [{
                text: "Who We Are",
                link: "#"
            },
            {
                text: "Contact Us",
                link: "#"
            },
            {
                text: "Careers",
                link: "#"
            },
            ],
        }
    }
})