import { addParameters, configure, addDecorator } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addReadme } from "storybook-readme";

const newViewports = {
  Responsive: {
    /**
     * name to display in the dropdown
     * @type {String}
     */
    name: "Responsive",

    /**
     * Inline styles to be applied to the story (iframe).
     * styles is an object whose key is the camelCased version of the style name, and whose
     * value is the style’s value, usually a string
     * @type {Object}
     */
    styles: {
      width: "100%",
      height: "100%"
    },

    /**
     * type of the device (e.g. desktop, mobile, or tablet)
     * @type {String}
     */
    type: "desktop"
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px"
    }
  }
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports
    }
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: "github"
  }
});
addDecorator(addReadme);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
