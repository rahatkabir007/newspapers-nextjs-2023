import { getServerSideSitemapLegacy } from "next-sitemap";
import { Jsondata } from "../../src/utils/Jsondata";
import { INewspaper } from "../../interfaces/models";

export const getServerSideProps = async (ctx: any) => {

    //@ts-ignore
    const banglaNewspapers = Jsondata.banglaNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const eBanglaNewspapers = Jsondata.eBanglaNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const onlineNewspapers = Jsondata.onlineNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));


    const tvChannels = Jsondata.tvChannels.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const ctgNewspapers = Jsondata.ctgNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const ctgCoxOnlineNewspapers = Jsondata.ctgCoxOnlineNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const localCoxOnline = Jsondata.localCoxOnline.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const localSylhet = Jsondata.localSylhet.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));


    const localKhulna = Jsondata.localKhulna.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const localBarisal = Jsondata.localBarisal.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const otherLocalNewspapers = Jsondata.otherLocalNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const internationalNewspapers = Jsondata.internationalNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const internationalTvChannels = Jsondata.internationalTvChannels.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));


    const indianNewspapers = Jsondata.indianNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));

    const sharebazarNewspapers = Jsondata.sharebazarNewspapers.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));


    const stockeExchange = Jsondata.stockeExchange.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));


    const otherUsefulLinks = Jsondata.otherUsefulLinks.map((item: INewspaper) => ({
        loc: `https://newspapers-nextjs-2023.vercel.app/redirect/${item?.url}`,
        lastmod: new Date().toISOString(),
    }));




    const fields = [...banglaNewspapers, ...eBanglaNewspapers, ...onlineNewspapers, ...tvChannels, ...ctgNewspapers, ...ctgCoxOnlineNewspapers, ...localCoxOnline, ...localSylhet, ...localKhulna, ...localBarisal, ...otherLocalNewspapers, ...internationalNewspapers, ...internationalTvChannels, ...indianNewspapers, ...sharebazarNewspapers, ...stockeExchange, ...otherUsefulLinks];

    return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() { }