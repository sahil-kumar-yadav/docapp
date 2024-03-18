
"use client"

import { useEffect, useState } from "react"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"



const CategoryList = (category) => {

    const [categoryList, setCataegoryList] = useState([])
    const params = usePathname();
    const category = params.split('/')[2];
    useEffect(() => {
        getcotegoryList()
    }, [])

    const getCategoryList = () => {
        GlobalApi.getcotegoryList().then(resp => {
            console.log(resp.data.data);
            setCataegoryList(resp.data.data);
        })
    }
    return (
        <div className="h-screen fixed mt-5 flex flex-col">
            <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="overflow-visible" >
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {categoryList && categoryList.map((item, index) => (
                            <CommandItem >
                                <Link href={'/search/'+item.name} className={`p-2 flex gap-2
                                text-[14px] items-center text-blue-600 rounded-md cursor-pointer w-full
                                ${category == item.name && 'bg-blue-100'}
                                `}>
                                    <Image src={item.url} alt="icon" width={25} height={25} />
                                    <label>{item.name}</label>
                                </Link>
                            </CommandItem>
                        ))}

                    </CommandGroup>

                </CommandList>
            </Command>

        </div>
    );
}

export default CategoryList;