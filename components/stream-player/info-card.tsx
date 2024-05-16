"use client";

import { Pencil } from "lucide-react";
//import { Separator } from "../ui/separator";
import Image from "next/image";
//import InfoModal from "./info-modal";

interface InfoCardProps {
	viewerIdentity: string;
	hostIdentity: string;
	thumbnailUrl: string | null;
	name: string;
}

export const InfoCard = ({}: InfoCardProps) => {
    return(
        <div className="">
            info card
        </div>
    );
};