"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("8af49753-4bb6-41c3-8537-194dd54f77ae");
    }, []);

    return null;
}