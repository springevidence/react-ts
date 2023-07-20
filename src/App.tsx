import React, {useState} from 'react';
import './App.css';
import {Accordion, MemoAccordion} from "./components/Accordion/Accordion";
import {MemoRating, Rating, RatingValueType} from "./components/Rating/Rating";
import {MemoOnOff, OnOff} from "./components/OnOff/OnOff";
import {
    MemoUncontrolledAccordion,
    UncontrolledAccordion
} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {MemoUncontrolledRating, UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {MemoUncontrolledOnOff, UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Select from "./components/Select/Select";
import {log} from "util";
import Clock from "./components/Clock/Clock";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState(false)

    let [value, setValue] = useState(false)
    const onClickCallback = () => {console.log('clicked')}

    return (
        <div className={"content"}>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <MemoRating value={ratingValue} putStars={setRatingValue}/>
            <MemoRating value={ratingValue} putStars={setRatingValue}/>
            <MemoRating value={ratingValue} putStars={setRatingValue}/>
            <MemoRating value={ratingValue} putStars={setRatingValue}/>
            <MemoRating value={ratingValue} putStars={setRatingValue}/>
            <MemoRating value={ratingValue} putStars={setRatingValue}/>

            <h3>Controlled Accordion</h3>
            <MemoAccordion titleValue={"Меню"} collapsed={collapsed} setCollapsed={setCollapsed} items={[{title: '111', value: 1}]} onClick={onClickCallback}/>
            <MemoAccordion titleValue={"Список"} collapsed={collapsed} setCollapsed={setCollapsed} items={[{title: '111', value: 1}]} onClick={onClickCallback}/>

            <h3>Uncontrolled Accordion</h3>
            <MemoUncontrolledAccordion titleValue={"Меню"}/>
            <MemoUncontrolledAccordion titleValue={"Список"}/>
            Article 2
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <h3>Uncontrolled Rating</h3>
            <MemoUncontrolledRating/>
            Homework
            <h3>Uncontrolled OnOff</h3>
            <MemoUncontrolledOnOff onChange={setValue}/>
            {value.toString()}

            <h3>Controlled OnOff</h3>
            <MemoOnOff value={value} setValue={setValue}/>

            <Select value={'2'}
                    onChange={()=>{console.log('item clicked')}}
                    items={[{title: 'html', id: '1'}, {title: 'css', id: '2'}, {title: 'js', id: '3'}]} />
            <Clock/>
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
