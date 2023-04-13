import {Grid, Text} from "@chakra-ui/react";
import React from "react";
import ImagesGridItem from "@/components/ImagesGridItem";
import {IImage} from "@/types/IImage";
import {IFavorite} from "@/types/IFavorite";
import {IUpload} from "@/types/IUpload";

type ImagesGridProps = {
    images: IImage[] | IFavorite[] | IUpload[] | undefined
    alertText: string
    style?: React.CSSProperties
}

/**
 * ImagesGrid component renders a five-column image grid from given data.
 * Renders an alert text string if data is empty.
 */
function ImagesGrid({images, alertText, style}: ImagesGridProps) {
    const imagesElems = images && images.map(image => {
        if ('image' in image) {
            return <ImagesGridItem src={image.image.url} key={image.image.id}
                                   imageId={image.image.id} removingId={image.id}/>
        } else {
            return <ImagesGridItem src={image.url} key={image.id} imageId={image.id}/>
        }
    })

    return (
        <>
            {
                images && images.length > 0 &&
                <Grid templateColumns='repeat(5, 1fr)' gap={6} w='100%' style={style}>
                    {imagesElems}
                </Grid>
            }
            {
                images && images.length === 0 &&
                <Text fontSize='4xl' pt={36} textAlign={'center'}>{alertText}</Text>
            }

        </>
    );
}

export default ImagesGrid;