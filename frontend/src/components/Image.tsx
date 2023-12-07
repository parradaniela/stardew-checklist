import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

type Props = {
    imgId: string
}
const Image = ({ imgId }: Props) => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUDINARY_NAME
        }
    });

    // const image = cld.image(imgId)
    return (
        <AdvancedImage cldImg={cld.image(imgId)} />
    )
}

export default Image