import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Mega, Jumbo, Headline, Title, Body, Caption } from 'phoenix-ui-kit';
const stories = storiesOf('Phoenix Design', module);
stories.addDecorator(withKnobs);

stories.add('Mega', () => {
  const name = text('text', 'Typography');
  return <React.Fragment>
    <Mega>{name}</Mega>
    <Jumbo>{name}</Jumbo>
    <Headline>{name}</Headline>
    <Title>{name}</Title>
    <Body>{name}</Body>
    <Caption>{name}</Caption>
  </React.Fragment>;
});

