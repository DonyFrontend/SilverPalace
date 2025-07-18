import { useAppDispatch, useAppSelector } from "@/shared/hooks/useReduxHooks";
import { useEffect } from "react";
import { charactersTC } from "../model/service/characters.service";
import { SkeletonComponent } from "@/widgets/skeleton/ui/Skeleton";

const Characters = () => {
    const dispatch = useAppDispatch();
    const { data, error, loading } = useAppSelector((state) => state.characters);

    useEffect(() => {
        dispatch(charactersTC());
    }, [dispatch]);

    console.log(data);
    console.log(error);
    console.log(loading);

    return (
        <div className="mt-main flex flex-col items-center gap-y-5 text-white">
            <div className="grid grid-cols-3 auto-rows-auto gap-[40px]">
                <SkeletonComponent />
                <SkeletonComponent />
                <SkeletonComponent />
                <SkeletonComponent />
                <SkeletonComponent />
                <SkeletonComponent />
            </div>
        </div>
    );
};

export default Characters;
