import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../components/icon/Icon";

const iconMeta:Meta<typeof Icon> = {
    title:"Icon components example",
    component:Icon,
};

export default iconMeta;

type IconStory=StoryObj<typeof iconMeta>;

export const rightArrow:IconStory = {
    args: {
        name:'ArrowRight',
    }
};


export const bell:IconStory = {
    args: {
        name:'Bell',
    }
};


export const chevronUp:IconStory = {
    args: {
        name:'ChevronUp',
        hidden4Sr:false,
        accessible_name:"Chevron up"
    }
};


