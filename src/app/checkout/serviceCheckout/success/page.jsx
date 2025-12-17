


export default async function Page({searchParams}){

const {payment_intent} = await searchParams;

console.log('❤️',payment_intent)

    return (
        <>
        <div className="text-4xl text-black">
            Success Services
            <p>
                hi
            </p>
        </div>
        </>
    )
}