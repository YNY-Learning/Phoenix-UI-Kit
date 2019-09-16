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
  InformationFill,
  CheckBox,
  Radio,
  ToolTip,
  Label,
  SquareRating,
  StarRating,
  Avatar,
  BreadCrumbs,
} from 'phoenix-ui-kit';
import 'phoenix-ui-kit/dist/index.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.onCheckToggle = this.onCheckToggle.bind(this);
  }
  onCheckToggle(e) {
    this.setState({
      checked: !this.state.checked,
    });
  }

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
          <h4>Default</h4>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button tertiary>Tertiary</Button>
        </div>
        <div className="hlist">
          <h4>with Icon</h4>
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
          <h4>Disabled</h4>
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
          <h4>Small</h4>
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
            {
              label: 'tab3',
              tabComponent: (
                <Button primary small>
                  Primary
                </Button>
              ),
            },
          ]}
        />
        <div className="hlist">
          <CheckBox
            label="default"
            name="default"
            selected={this.state.checked}
            onChange={this.onCheckToggle}
          />
          <CheckBox
            label="checked"
            selected={this.state.checked}
            name="checked"
            onChange={this.onCheckToggle}
          />
          <CheckBox
            label="disabled"
            disabled
            selected={this.state.checked}
            name="disabled"
            onChange={this.onCheckToggle}
          />
          <CheckBox
            label=" selected and disabled"
            disabled
            selected={this.state.checked}
            name="selected and disabled"
            onChange={this.onCheckToggle}
          />
        </div>
        <div className="hlist">
          <ToolTip label="tooltip" placement="bottom">
            <InformationFill />
          </ToolTip>
          <ToolTip label="tooltip" placement="top">
            <InformationFill />
          </ToolTip>
          <ToolTip label="tooltip" placement="left">
            <InformationFill />
          </ToolTip>
          <ToolTip label="tooltip" placement="right">
            <InformationFill />
          </ToolTip>
        </div>
        <div className="hlist">
          <Radio
            label="default"
            name="default"
            selected={this.state.checked}
            onChange={this.onCheckToggle}
          />
          <Radio
            label="checked"
            selected={this.state.checked}
            name="checked"
            onChange={this.onCheckToggle}
          />
          <Radio
            label="disabled"
            disabled
            selected={this.state.checked}
            name="disabled"
            onChange={this.onCheckToggle}
          />
          <Radio
            label=" selected and disabled"
            disabled
            selected={this.state.checked}
            name="selected and disabled"
            onChange={this.onCheckToggle}
          />
        </div>
        <div className="hlist">
          <Label state="success">success</Label>
          <Label state="error">error</Label>
          <Label state="warning">warning</Label>
          <Label state="info">information</Label>
        </div>
        <div className="hlist">
          <div className="vlist">
            <SquareRating
              levels={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              ranking={0}
            />
            <SquareRating
              levels={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              ranking={1}
            />
            <SquareRating
              levels={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              ranking={2}
            />
            <SquareRating
              levels={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              ranking={3}
            />
            <SquareRating
              levels={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              ranking={4}
            />
            <SquareRating
              levels={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              ranking={5}
            />
          </div>
          <div className="vlist">
            <StarRating
              options={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              name="stars"
              value={0}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              name="stars"
              value={1}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              name="stars"
              value={2}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              name="stars"
              value={3}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              name="stars"
              value={4}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}
              name="stars"
              value={5}
              onChange={e => console.log(e)}
            />
          </div>
        </div>
        <div className="hlist">
          <Avatar
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            alt="avatar photo"
            small
          />
          <Avatar
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            alt="avatar photo"
            square
            small
          />
          <Avatar
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            alt="avatar photo"
            large
          />
          <Avatar
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            alt="avatar photo"
            square
            large
          />
        </div>
        <div className="hlist">
          <div className="vlist">
            <BreadCrumbs routes={['Dashboard']} />
            <BreadCrumbs routes={['Dashboard', 'Level 2']} />
            <BreadCrumbs routes={['Dashboard', 'Level 2', 'Level 3']} />
            <BreadCrumbs
              routes={['Dashboard', 'Level 2', 'Level 3', 'Level 4']}
            />
          </div>
        </div>
      </div>
    );
  }
}
