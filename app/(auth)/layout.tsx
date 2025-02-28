import React from "react";
import Image from "next/image";
import { getCurrentUser } from "@/lib/actions/users.actions";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const currentUser = await getCurrentUser();
    if (currentUser) return redirect("/dashboard");

    return (
        <div className={`flex min-h-screen`}>
            <section
                className={
                    "bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5"
                }
            >
                <div
                    className={
                        "flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12"
                    }
                >
                    <Image
                        src={`/logo/sta.png`}
                        alt={"logo"}
                        width={224}
                        height={82}
                        className={"h-auto"}
                    />
                    <div className={"space-y-5 text-white"}>
                        <h1 className="h1">Manage your files the best way</h1>
                        <p className={"body-1"}>
                            This is a place where you can store your files and access them
                            from anywhere.
                        </p>
                    </div>
                    <Image
                        src={"/images/lo.jpg"}
                        alt={"Files"}
                        loading={"lazy"}
                        width={342}
                        height={342}
                        className={"transition-all rounded-2xl hover:rotate-2 hover:scale-105"}
                    />
                </div>
            </section>

            <section className="flex flex-1 flex-col  dark:bg-neutral-800 items-center  p-4 py-20 lg:justify-center lg:p-10 lg:py-10">
                <div className={"mb-16 lg:hidden"}>
                    <Image
                        src={"/logo/sta.png"}
                        alt={"logo"}
                        width={224}
                        height={82}
                        className={"h-auto w-[200px] lg:w-[250px]"}
                    />
                </div>
                {children}
            </section>
        </div>
    );
};
export default Layout;
