import type {Meta, StoryObj} from "@storybook/react";
import { fn} from "@storybook/test";
import { Button } from "../components/button/Button";



const buttonMeta:Meta<typeof Button> = {
    title:"Button example",
    component:Button,
    args: {
        onClick:fn(),
    }
};

export default buttonMeta;

type ButtonStory=StoryObj<typeof buttonMeta>;

export const primary:ButtonStory = {
args: {
    label:'Primary button',
}
};

export const secondary:ButtonStory = {
    args: {
        label:'Secondary button',
    }
};



