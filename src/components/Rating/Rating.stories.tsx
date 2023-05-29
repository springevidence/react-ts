import type { Meta, StoryObj } from '@storybook/react';
import {Rating, RatingValueType} from './Rating';
import {useState} from "react";

const meta = {
    title: 'Rating',
    component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;

export const EmptyRating = () => <Rating value={0} putStars={x => x}/>
export const Rating1 = () => <Rating value={1} putStars={x => x}/>
export const Rating2 = () => <Rating value={2} putStars={x => x}/>
export const Rating3 = () => <Rating value={3} putStars={x => x}/>
export const Rating4 = () => <Rating value={4} putStars={x => x}/>
export const Rating5 = () => <Rating value={5} putStars={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} putStars={setRating}/>
}