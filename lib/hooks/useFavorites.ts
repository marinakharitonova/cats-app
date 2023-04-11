import {IImagesRequestParams} from "@/types/IImagesRequestParams";
import {SWRConfiguration} from "swr";
import useSWRImmutable from "swr/immutable";
import {filterParams} from "@/lib/filterParams";
import {imagesFetcher} from "@/lib/fetchers/fetchers";
import {IFavorites} from "@/types/IFavorites";

export const useFavorites = (params?: IImagesRequestParams, config?: SWRConfiguration,) => {
    const {
        data,
        isLoading,
        isValidating,
    } = useSWRImmutable<IFavorites>(['/api/favourites', filterParams(params ?? {})], imagesFetcher, config)

    return {
        favorites: data?.images,
        favoritesCount: data?.imagesCount,
        isFavoritesLoading: isLoading,
        isFavoritesValidating: isValidating
    }
}