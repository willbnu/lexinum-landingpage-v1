import React from 'react';
    import CTAButtons from './CTAButtons';

    export default {
      title: 'Components/CTAButtons',
      component: CTAButtons,
    };

    const Template = (args) => <CTAButtons {...args} />;

    export const Default = Template.bind({});
    Default.args = {
      lang: 'en', // Provide the lang prop here!
    };

    export const Hovered = Template.bind({});
    Hovered.args = {
      lang: 'en', // Provide lang here too
    };
    Hovered.parameters = {
      pseudo: {
        hover: true,
      },
    };

    export const Spanish = Template.bind({});
    Spanish.args = {
        lang: 'es'
    }
    export const Japanese = Template.bind({});
    Japanese.args = {
        lang: 'jp'
    }
