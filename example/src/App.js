import React, { Component } from 'react';

import {
  Mega,
  Jumbo,
  Headline,
  Title,
  Body,
  Caption,
  Button,
  Tabs,
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
        <div className="hlist">
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button tertiary>Tertiary</Button>
        </div>
        <div className="hlist">
          <Button
            primary
            withIcon
            buttonIcon={<Bell color="#FFF" width="12px" height="12px" />}
          >
            Action
          </Button>
          <Button
            secondary
            withIcon
            buttonIcon={<Bell color="#C1C1C1" width="12px" height="12px" />}
          >
            Action
          </Button>
          <Button
            tertiary
            withIcon
            buttonIcon={<Bell color="#C1C1C1" width="12px" height="12px" />}
          >
            Action
          </Button>
        </div>

        <div className="hlist">
          <Button primary disabled>
            Primary
          </Button>
          <Button secondary disabled>
            Secondary
          </Button>
          <Button tertiary disabled>
            Tertiary
          </Button>
        </div>
        <div className="hlist">
          <Button primary small>
            Primary
          </Button>
          <Button secondary small>
            Secondary
          </Button>
          <Button tertiary small>
            Tertiary
          </Button>
        </div>
        <Tabs
          tabList={[
            { label: 'tab1', tabComponent: <h1>tab1 content</h1> },
            { label: 'tab2', tabComponent: <p>tab2 content</p> },
            { label: 'tab3', tabComponent: <Button primary small>
                Primary
              </Button> },
          ]}
        />
      </div>
    );
  }
}
