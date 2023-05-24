import React from 'react'
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { getKeywords } from '../../src/utils/Keywords';
import { controller } from '../../src/state/StateController';
import { Constants } from '../../src/utils/Constants';

interface Props {
    title?: string
    type?: string
}



function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const AllSeos: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);

    const websiteLink = `News Hub.xyz`
    const firstTitle = "All Bangla & International Newspapers 2023"
    const logo1 = "https://i.ibb.co/D7HxH0p/favicon.png";
    const description = Constants.descriptions[randomIntFromInterval(0, Constants.descriptions.length - 1)]

    const getFinalTitle = () => {
        let title = firstTitle
        if (props.type) {
            title += ` | ${props.type}`
        }
        if (props.title) {
            title += ` | ${props.title}`
        }
        return title
    }

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href={logo1} />
                <link rel="icon" type="image/png" sizes="32x32" href={logo1} />
                <link rel="icon" type="image/png" sizes="16x16" href={logo1} />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="keywords" content={getKeywords(25).join(",")} />
                <meta name="application-name" content='News Hub.xyz' />
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="5 minutes" />
                <meta name="twitter:title" content={getFinalTitle()} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="https://i.ibb.co/chRY2nP/dobd-xyz.png" />
                <meta name="twitter:image:alt" content={getFinalTitle()} /> */}
                <meta name="language" content="en" />
            </Head>
            <NextSeo
                title={getFinalTitle()}
                titleTemplate={`${websiteLink} | %s`}
                description={description}
                openGraph={{
                    title: getFinalTitle(),
                    description: description,
                    images: [
                        {
                            url: `${logo1}`,
                            alt: `${websiteLink} | ${firstTitle}`
                        }
                    ],
                    type: 'website'
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
        </>
    )

}

export default AllSeos;