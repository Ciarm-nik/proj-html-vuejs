new Vue({
    el: "#app",
    data: {
        navbarLinks: [{
            // Dropdown menu Home
            text: "Home",
            link: "#",
            icon:"fa-chevron-down",
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
            link: "#section-1",
            icon:"fa-chevron-down",
        },
        {
            text: "Why Us",
            link: "#section-5"
        },
        {
            text: "Case Studies",
            link: "#section-9"
        },
        {
            text: "About",
            link: "#section-11"
        },
        {
            text: "Blog",
            link: "#footer"
        },
        // Icon + numero(text)
        {
            icon: "fa-phone-alt",
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