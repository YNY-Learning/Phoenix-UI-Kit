import React, { Component } from 'react';

import {
  Mega,
  Jumbo,
  Headline,
  Title,
  Body,
  Caption,
  Button,
  Bell,
} from 'phoenix-ui-kit';

export default class App extends Component {
  render() {
    // console.log(YNYTheme)
    return (
      <div>
        <Mega>Mega</Mega>
        <Jumbo>Jumbo</Jumbo>
        <Headline>Headline</Headline>
        <Title>Title</Title>
        <Body>Body</Body>
        <Caption>Caption</Caption>
        <hr />
        <Mega weight="semibold">Mega</Mega>
        <Jumbo weight="semibold">Jumbo</Jumbo>
        <Headline weight="semibold">Headline</Headline>
        <Title weight="semibold">Title</Title>
        <Body weight="semibold">Body</Body>
        <Caption weight="semibold">Caption</Caption>
        <hr />
        <Button primary>Primary</Button>
        <Button
          primary
          withIcon
          buttonIcon={<Bell color="#FFF" width="12px" height="12px" />}
        >
          Action
        </Button>
        <Button secondary>Secondary</Button>
        <Button tertiary>Tertiary</Button>
        <Button small>Hello</Button>
      </div>
    );
  }
}
