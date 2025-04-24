import Image from "next/image";
import cache from '@cache/wedding__main-page.json';
import type { TChacheJSON } from "@/cache/types";
import img from '@cache/test.json';



const Product = async () => {

    const data = cache as TChacheJSON;
    const keys = Object.keys(data);

    return(
        <div style={{fontSize: '20px'}} >
            {
                keys.map(item => (
                    <Image 
                        src={data[item].src} 
                        width={data[item].width}
                        height={data[item].height}
                        placeholder="blur"
                        blurDataURL={data[item].blurDataURL}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        alt={data[item].alt} 
                        //priority
                        key={data[item].src}
                    />
                ))
            }
            {/* <Image 
                src={img["2.jpg"].src} 
                width={img["2.jpg"].width}
                height={img["2.jpg"].height}
                placeholder="blur"
                blurDataURL={img["2.jpg"].blurDataURL}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                alt={img["2.jpg"].alt} 
                priority
            /> */}
            {/* <button
                style={{backgroundColor: 'blue', color: '#fff', fontSize: '20px'}}
                onClick={() => router.push('/product/12?time=23')}
            >ID BUTTON</button> */}
        </div>
    )
}


export default Product;






