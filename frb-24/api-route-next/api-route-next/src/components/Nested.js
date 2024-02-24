"use server"

async function getTime() {
    const time = await fetch("https://worldtimeapi.org/api/ip", {
        cache: "no-store"
    });
    return await time.json();
}

export default async function Nested() {
    const time = await getTime();
    return (
        <div>
            <h1>Time in nested is {time.datetime}</h1>
        </div>
    )
}