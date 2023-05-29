
type IPropsType ={
    card: {
        title: string,
        description: string,
        img: string,
        to: string,
        no: string,
        color: string
    }
}
export const Card = ({card}: IPropsType) => {
    return (
        <a href={card.to} className={` shadow-lg hover:shadow-xl hover:brightness-95 transition-all ${card.color} p-12 text-white-primary`}>
            <div className="">
                <div className="font-bold text-3xl">
                    {card.title}
                </div>
                <div className="font-semibold text-lg ">
                    {card.description}
                </div>
                <div className="font-bold text-md mt-6">
                    #1 {card.no}
                </div>
            </div>
            <div className="">

            </div>
        </a>
    )
}
