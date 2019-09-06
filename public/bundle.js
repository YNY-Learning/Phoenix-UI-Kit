var App = (function (exports,React,PropTypes,styled) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var styled__default = 'default' in styled ? styled['default'] : styled;

  var Theme = {
    primary5: '#484F87',
    primary4: '#4E59AD',
    primary1: '#5F6FEE',
    primary2: '#A6AEED',
    primary3: '#CACEED',
    primaryTransparent: 'rgba(202,206,237,0.5)',
    black: '#000',
    grey4: '#666B8C',
    grey3: '#9296B3',
    grey2: '#D8D9E6',
    grey1: '#F2F2F5',
    white: '#FFF',
    green1: '#56D68B',
    yellow1: '#FFC15E',
    red1: '#EF6F6C'
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  var _templateObject = taggedTemplateLiteral(['\n  font-size: 1em;\n  color: ', ';\n'], ['\n  font-size: 1em;\n  color: ', ';\n']);

  var HeaderComponent = styled__default.h1(_templateObject, function (props) {
    return props.theme.primary1;
  });

  var Header = function (_Component) {
    inherits(Header, _Component);

    function Header() {
      classCallCheck(this, Header);
      return possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    createClass(Header, [{
      key: 'render',
      value: function render() {
        return React__default.createElement(
          styled.ThemeProvider,
          { theme: Theme },
          React__default.createElement(
            HeaderComponent,
            null,
            ' ',
            this.props.text,
            ' '
          )
        );
      }
    }]);
    return Header;
  }(React.Component);

  Header.propTypes = {
    text: PropTypes.string
  };

  exports.Header = Header;

  return exports;

}({},React,PropTypes,styled));
//# sourceMappingURL=bundle.js.map
