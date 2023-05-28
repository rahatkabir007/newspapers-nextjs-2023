// @type { import('next-sitemap').IConfig }
const siteUrl = 'https://newspapers-nextjs-2023.vercel.app'

module.exports = {
    siteUrl,
    exclude: ["/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/404"],
            },
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `${siteUrl}/sitemap.xml`,
            `${siteUrl}/server-sitemap.xml`,
        ],
    },
};