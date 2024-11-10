'use client';

import { useMemo, useState } from "react";
import { compareEntries, Entry } from "./entry";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Fuse from "fuse.js";

interface FilterProps {
    title: string,
    searchPlaceholder: string,
    entries: Entry[],
    onEntryClicked: (key: string) => void,
}

export const Filter = ({
    title,
    searchPlaceholder,
    entries,
    onEntryClicked,
}: FilterProps) => {
    const [searchFilter, setSearchFilter] = useState<string>("");

    const filteredEntries = useMemo(() => {
        if (searchFilter === "") {
            return entries;
        }

        const fuse = new Fuse(entries, {
            keys: ["displayName"],
            threshold: 0.3,
        });

        const result = fuse.search(searchFilter);
        return result.map((result) => result.item);
    }, [entries, searchFilter]);

    return (
        <div className="flex flex-col gap-2 p-1">
            <h2 className="text-sm font-semibold">{title}</h2>
            <Input
                placeholder={searchPlaceholder}
                className="h-8"
                onChange={(event) => setSearchFilter(event.target.value)}
            />

            <ScrollArea
                className="overflow-hidden"
            >
                <div
                    className="flex flex-col gap-0.5 text-sm h-full max-h-80 px-0.5"
                >
                    {filteredEntries
                        .sort((entryA, entryB) => compareEntries(entryB, entryA))
                        .map((entry) => (
                            <Entry
                                key={entry.key}
                                entry={entry}
                                onClicked={() => onEntryClicked(entry.key)}
                            />
                        ))}
                </div>
            </ScrollArea>
        </div>
    )
}