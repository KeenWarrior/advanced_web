import Nested from "@/components/Nested";

async function getTime() {
    const time = await fetch("https://worldtimeapi.org/api/ip");
    return await time.json();
}

export default async function Page({params}) {
    const time = await getTime();
    return (
        <div>
            <h1>Time is {time.datetime}</h1>
            <Nested />
        </div>
    )
}