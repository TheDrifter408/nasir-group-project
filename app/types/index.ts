
export type CardProps = {
    cardNum:string,
    numSize:string,
    cardText:string,
    textSize:string,
    position:string,
    width:number | 100,
    borderDesign?:string
}

export type ButtonProps = {
    bgColor:string,
    text:string,
    textColor:string,
}

export type HomeTranslateProps = {
    visible:boolean,
    translate:number,
}

export type CarouselItemProps = {
    id:number,
    year:string,
    title:string,
    imagePath:string,
    desc:string,
}

export type CarouselProps = {
    data:CarouselItemProps[]
}