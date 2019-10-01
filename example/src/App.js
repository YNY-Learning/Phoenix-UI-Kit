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
  HomeOutline,
  LayersOutline,
  InformationFill,
  PeopleOutline,
  CheckBox,
  Radio,
  ToolTip,
  Label,
  SquareRating,
  StarRating,
  Avatar,
  BreadCrumbs,
  Input,
  Toaster,
  CalendarPicker,
  Card,
  Navbar,
  LogoShort,
  HeaderBar,
  AutoSuggestion,
  Dropdown,
  ProgressBar,
} from 'phoenix-ui-kit';
import 'phoenix-ui-kit/dist/index.min.css';

const options = [
  { value: 'advisor', label: 'Conseiller' },
  { value: 'antiquarian', label: 'Antiquaire' },
  { value: 'boilermaker', label: 'Chaudronnier' },
  { value: 'dental_technician', label: 'Prothésiste Dentaire' },
  { value: 'engineer', label: 'Ingénieur' },
  { value: 'forest_ingineer', label: 'Ingénieur Forestier' },
  { value: 'graphic_designer', label: 'Designer Graphique' },
  { value: 'industrial_designer', label: 'Designer Industriel' },
  { value: 'interior_designer', label: 'Architecte d interieur' },
  { value: 'lawyer', label: 'Avocat' },
  { value: 'logistician', label: 'Logisticien' },
  { value: 'officer', label: 'Officier' },
  { value: 'photographer', label: 'Photographe' },
  { value: 'product_tourist', label: 'Chef de Projet secteur Touriste' },
  { value: 'receptionist', label: 'Receptioniste' },
  { value: 'school_teacher', label: 'Professeur des Ecoles' },
  { value: 'warehouseman', label: 'Magasinier' },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      startDate: new Date(),
      showNavbar: false,
      showHeader: false,
      autoComplete: '',
    };
    this.onCheckToggle = this.onCheckToggle.bind(this);
    this.onSelectDate = this.onSelectDate.bind(this);
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.toggleHeaderBar = this.toggleHeaderBar.bind(this);
    this.onAutoCompleteChange = this.onAutoCompleteChange.bind(this);
  }
  onCheckToggle(e) {
    this.setState({
      checked: !this.state.checked,
    });
  }
  onSelectDate(e) {
    console.log(e.target.value);
    this.setState({
      startDate: e.target.value,
    });
  }
  toggleNavBar() {
    this.setState({
      showNavbar: !this.state.showNavbar,
    });
  }
  toggleHeaderBar() {
    this.setState({
      showHeader: !this.state.showHeader,
    });
  }
  onAutoCompleteChange(e) {
    this.setState({
      autoComplete: e.target.value,
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
          <Button onClick={e => console.log(e)} primary>
            Primary
          </Button>
          <Button onClick={e => console.log(e)} secondary>
            Secondary
          </Button>
          <Button onClick={e => console.log(e)} tertiary>
            Tertiary
          </Button>
        </div>
        <div className="hlist">
          <h4>with Icon</h4>
          <Button
            onClick={e => console.log(e)}
            primary
            withIcon
            buttonIcon={<Bell color="#FFF" width="12px" height="12px" />}
          >
            Action
          </Button>
          <Button
            onClick={e => console.log(e)}
            secondary
            withIcon
            buttonIcon={<Bell color="#C1C1C1" width="12px" height="12px" />}
          >
            Action
          </Button>
          <Button
            onClick={e => console.log(e)}
            tertiary
            withIcon
            buttonIcon={<Bell color="#C1C1C1" width="12px" height="12px" />}
          >
            Action
          </Button>
        </div>

        <div className="hlist">
          <h4>Disabled</h4>
          <Button onClick={e => console.log(e)} primary disabled>
            Primary
          </Button>
          <Button onClick={e => console.log(e)} secondary disabled>
            Secondary
          </Button>
          <Button onClick={e => console.log(e)} tertiary disabled>
            Tertiary
          </Button>
        </div>
        <div className="hlist">
          <h4>Small</h4>
          <Button onClick={e => console.log(e)} primary small>
            Primary
          </Button>
          <Button onClick={e => console.log(e)} secondary small>
            Secondary
          </Button>
          <Button onClick={e => console.log(e)} tertiary small>
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
                <Button onClick={e => console.log(e)} primary small>
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
              options={['Nah', 'Could improve', 'Okay', 'Good!', 'Awesome!']}
              name="stars"
              value={0}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['Nah', 'Could improve', 'Okay', 'Good!', 'Awesome!']}
              name="stars"
              value={1}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['Nah', 'Could improve', 'Okay', 'Good!', 'Awesome!']}
              name="stars"
              value={2}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['Nah', 'Could improve', 'Okay', 'Good!', 'Awesome!']}
              name="stars"
              value={3}
              onChange={e => console.log(e)}
            />
            <StarRating
              options={['Nah', 'Could improve', 'Okay', 'Good!', 'Awesome!']}
              name="stars"
              value={4}
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
        <div className="vlist">
          <BreadCrumbs routes={['Dashboard']} />
          <BreadCrumbs routes={['Dashboard', 'Level 2']} />
          <BreadCrumbs routes={['Dashboard', 'Level 2', 'Level 3']} />
          <BreadCrumbs
            routes={['Dashboard', 'Level 2', 'Level 3', 'Level 4']}
          />
        </div>
        <div className="hlist">
          <Input
            name="input1"
            onChange={e => console.log(e)}
            onBlur={e => console.log('blur', e)}
            placeholder="Input text"
          />
          <Input
            name="input1"
            onChange={e => console.log(e)}
            onBlur={e => console.log('blur', e)}
            placeholder="Input text"
            disabled
          />
          <Input
            name="input1"
            onChange={e => console.log(e)}
            onBlur={e => console.log('blur', e)}
            placeholder="Input text"
            inputState="success"
          />
          <Input
            name="input1"
            onChange={e => console.log(e)}
            onBlur={e => console.log('blur', e)}
            placeholder="Input text"
            inputState="error"
          />
        </div>
        <div className="hlist">
          <CalendarPicker
            onChange={this.onSelectDate}
            value={this.state.startDate}
            name="datepicker"
          />
        </div>
        <div className="hlist">
          <div className="vlist">
            <Toaster
              closeAction={e => console.log('close toaster')}
              type="info"
              title="Information"
              body="Tell me more about what happenned"
            />
            <Toaster
              closeAction={e => console.log('close toaster')}
              type="warning"
              title="Warning"
              body="Tell me more about what happenned"
            />
            <Toaster
              closeAction={e => console.log('close toaster')}
              type="success"
              title="Success"
              body="Tell me more about what happenned"
            />
            <Toaster
              closeAction={e => console.log('close toaster')}
              type="error"
              title="Error"
              body="Tell me more about what happenned"
            />
            <Toaster
              closeAction={e => console.log('close toaster')}
              type="info"
              title="Information"
              body="Tell me more about what happenned"
              withAction
              actionTitle="Got it"
              action={e => console.log(e)}
            />
          </div>
        </div>

        <div className="hlist">
          <div className="vlist">
            <Card
              selected
              leftComponent={<p>1</p>}
              centerComponent={<p>2</p>}
              rightComponent={<p>3</p>}
            />
            <Card
              leftComponent={
                <div className="icon__container">
                  <Bell color="#FFF" width="12px" height="12px" />
                </div>
              }
              centerComponent={
                <div>
                  <Body>Introduce Yourself</Body>
                  <Caption>Cours en visio</Caption>
                </div>
              }
              rightComponent={
                <CheckBox
                  selected
                  name="default"
                  onChange={this.onCheckToggle}
                />
              }
            />
            <Card
              leftComponent={
                <Avatar
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
                  alt="avatar photo"
                  large
                />
              }
              centerComponent={<Title>Presentation de projet</Title>}
              rightComponent={
                <Bell color="#C1C1C1" width="20px" height="20px" />
              }
            />
          </div>
        </div>
        <div className="hlist">
          <AutoSuggestion
            name="autoComplete"
            onChange={this.onAutoCompleteChange}
            placeholder="autoSuggestion"
            autoComplete="text"
            value={this.state.autoComplete}
            options={options}
          />
        </div>
        <div className="hlist">
          <Button onClick={this.toggleNavBar} primary>
            Show nav bar
          </Button>
          {this.state.showNavbar && (
            <Navbar
              dark
              logo={<LogoShort />}
              navItems={[
                {
                  link: '/#',
                  logo: <HomeOutline color="#FFF" width="24px" height="24px" />,
                  hasTooltip: true,
                  toolTipLabel: 'Home',
                },
                {
                  link: '/layers',
                  logo: (
                    <LayersOutline color="#FFF" width="24px" height="24px" />
                  ),
                  hasTooltip: true,
                  toolTipLabel: 'layers',
                },
                {
                  link: '/teachers',
                  logo: (
                    <PeopleOutline color="#FFF" width="24px" height="24px" />
                  ),
                  hasTooltip: true,
                  toolTipLabel: 'teachers',
                },
              ]}
            />
          )}
        </div>
        <div className="hlist">
          <Button onClick={this.toggleHeaderBar} primary>
            Show Header Bar
          </Button>
          {this.state.showHeader && (
            <HeaderBar
              profile={{
                imageURl:
                  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
                fullName: ' Alfredo Tinder',
                onlineStatus: 'online',
              }}
              contentComponent={
                <Title color="black" weight="semibold">
                  Dashboard
                </Title>
              }
            />
          )}
        </div>

        <div className="hlist">
          <Dropdown
            name="dropDown"
            onChange={this.onAutoCompleteChange}
            placeholder="Dropdown"
            autoComplete="text"
            value={this.state.autoComplete}
            options={options}
            onBlur={e => console.log('blur', e)}
          />
        </div>
        <div className="hlist">
          <ProgressBar
            currentTime={10}
            duration={45}
            IconComponent={
              <Bell color="#9296B3" width="20px" height="20px" />
            }
          />
        </div>
      </div>
    );
  }
}
