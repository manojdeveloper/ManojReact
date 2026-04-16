import { useEffect, useRef, useState } from "react";
import "./ImageSliderTask.scss";
import { GrNext, GrPrevious } from "react-icons/gr";

export let ImageSliderTask = () => {
    let [sliderData, SetSliderData] = useState(null);
    let [error, SetError] = useState(null);
    let [slidePosition, SetSlidePosition] = useState(0);
    let sliderRow = useRef();

    let fetchData = async () => {
        try {
            let apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=6";
            let response = await fetch(apiUrl);
            let data = await response.json();

            let subData = data.results.map(async (current) => {
                let response = await fetch(current.url);
                let data = await response.json();
                return data;

            });

            let setData = await Promise.all(subData);

            let imageArray = [];

            setData.forEach((current, index) => {
                imageArray.push(current.sprites.other["official-artwork"].front_default);
            });

            SetSliderData(imageArray);



        } catch (error) {
            console.log(error);
        }


    }

    useEffect(() => {
        fetchData();

    }, [])

    useEffect(() => {
        sliderRow.current.style.transform = `translateX(${slidePosition}px)`;
    }, [slidePosition])



    let sliderCalc = () => {
        let sliderObj = {
            numofslide: sliderRow.current.childElementCount,
            slideperclick: sliderRow.current.children[1].offsetLeft,
            totalwidth: (sliderRow.current.children[1].offsetLeft * sliderRow.current.childElementCount) - (sliderRow.current.children[1].offsetLeft * 3),
        }

        return sliderObj;
    }

    let nextSlide = () => {
        if(Math.abs(slidePosition) < sliderCalc().totalwidth){
            SetSlidePosition((prevVal)=>{
                let newVal = prevVal - sliderCalc().slideperclick;
                return newVal;
            })
        }

        //console.log("inner width innerWidth", sliderRow.current.children[1].offsetLeft);
    }

    let prevSlide = () => {
        //console.log(slidePosition, sliderCalc().totalwidth)
        if(slidePosition < 0){
            SetSlidePosition((prevVal)=>{
                let newVal = prevVal + sliderCalc().slideperclick;
                return newVal;
            })
        }
    }


    return (
        <div className="sliderTaskSection">
            <div className="sliderSection">
                <div className="sliderRow" ref={sliderRow}>
                    {sliderData ?
                        sliderData.map((current, index) => {
                            return <div key={index} className="sliderCol"><img src={current} /></div>
                        }) : "abhi data aayega"

                    }

                </div>
                <button className="prevButton" onClick={prevSlide} type="button"><GrPrevious /></button>
                <button className="nextButton" onClick={nextSlide} type="button"><GrNext /></button>
            </div>
        </div>
    )
}