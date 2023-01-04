import { Image } from '@chakra-ui/react';
import { FC } from 'react';

interface AccentColorImageProps {
    src: string;
    alt: string;
}

const AccentColorImage: FC<AccentColorImageProps> = ({ alt, src }) => {
    return (
        <Image
            opacity={0.8}
            objectFit={'cover'}
            height={'full'}
            width={'full'}
            transition={'all 0.2s ease-in-out'}
            _hover={{ opacity: 1 }}
            rounded={'lg'}
            alt={alt}
            src={src}
        />
    );
};

export default AccentColorImage;
