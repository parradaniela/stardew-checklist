import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { grayscale } from "@cloudinary/url-gen/actions/effect";

type Props = {
    imgId: string;
    greyscale: boolean;
};
const Image = ({ imgId, greyscale }: Props) => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
        },
    });

    const forageImg = cld.image(imgId);
    if (greyscale) {
        forageImg.effect(grayscale());
    }
    return <AdvancedImage cldImg={forageImg} />;
};

export default Image;
