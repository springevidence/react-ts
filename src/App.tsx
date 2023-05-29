import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState(false)

    let [value, setValue] = useState(false)
    return (
        <div className={"content"}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={ratingValue} putStars={setRatingValue}/>
            <Rating value={ratingValue} putStars={setRatingValue}/>
            <Rating value={ratingValue} putStars={setRatingValue}/>
            <Rating value={ratingValue} putStars={setRatingValue}/>
            <Rating value={ratingValue} putStars={setRatingValue}/>
            <Rating value={ratingValue} putStars={setRatingValue}/>

            <h3>Controlled Accordion</h3>
            <Accordion titleValue={"Меню"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Accordion titleValue={"Список"} collapsed={collapsed} setCollapsed={setCollapsed}/>

            <h3>Uncontrolled Accordion</h3>
            <UncontrolledAccordion titleValue={"Меню"}/>
            <UncontrolledAccordion titleValue={"Список"}/>
            Article 2
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <h3>Uncontrolled Rating</h3>
            <UncontrolledRating/>
            Homework
            <h3>Uncontrolled OnOff</h3>
            <UncontrolledOnOff onChange={setValue}/>
            {value.toString()}

            <h3>Controlled OnOff</h3>
            <OnOff value={value} setValue={setValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
