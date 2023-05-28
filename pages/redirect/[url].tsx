import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Loader from '../../components/helpers/Loader/Loader';

interface Props {
}

const url: React.FC<Props> = (props) => {
    const router = useRouter();
    const { url } = router.query;


    useEffect(() => {
        if (url) {
            const formattedURL = Array.isArray(url) ? url[0] : url;
            const urlWithoutHtml = formattedURL.replace('.html', '');
            const externalURL = urlWithoutHtml.startsWith('http://') || urlWithoutHtml.startsWith('https://')
                ? urlWithoutHtml
                : `http://${urlWithoutHtml}`;
            window.location.href = externalURL;
        }
    }, [url]);

    return (
        <div className='container-x'>
            <div className='min-h-[90vh]'>
                <div className='flex flex-col gap-5 justify-center items-center my-10'>
                    <Loader />
                    <div>
                        <span className='text-ndarkblue text-2xl'>Redirecting</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default url