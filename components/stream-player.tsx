"use client";

import { useViewerToken } from "@/hooks/use-viewer-token";

import { Stream, User } from "@prisma/client";

interface StreamPlayerProps {
    user: User & { stream: Stream | null};
    stream: Stream;
    isFollowing: boolean;
}
export const StreamPlayer = ({
    user,
    stream,
    isFollowing
}: StreamPlayerProps) => {
    const {
        token,
        name,
        identity,
    } = useViewerToken(user.id);

    console.log({token,name, identity})

    if (!token || !name || !identity){
        return(
            <div className="">
                can not watch stream
            </div>
        )
    }

    return(
        <>
            Allowed to watch the stream
        </>
    );
};