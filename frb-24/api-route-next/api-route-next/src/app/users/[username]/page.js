export default function Page({params}) {
    const username = params.username;
    return (
        <div>
            <h1>Hello {username}</h1>
        </div>
    )
}