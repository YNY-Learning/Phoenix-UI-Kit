import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Header } from "phoenix-ui-kit";
const stories = storiesOf("Phoenix Design", module);
stories.addDecorator(withKnobs);

stories.add("Header", () => {
  const name = text('text', 'Header Test');
return <Header text={name} />
});
