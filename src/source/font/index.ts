import localFont from 'next/font/local';


export const Hand = localFont({
    src: './Caveat-Regular.woff2'
});

export const Mont = localFont({
    src: [
        {
            path: './Montserrat-Regular.woff2',
            weight: '400'
        },
        {
            path: './Montserrat-Medium.woff2',
            weight: '500'
        },
        {
            path: './Montserrat-SemiBold.woff2',
            weight: '600'
        }
    ]
});

export const Streamster = localFont({
    src: './Streamster.woff2'
});