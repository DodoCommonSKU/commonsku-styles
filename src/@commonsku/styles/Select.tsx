import React from 'react'
import styled from 'styled-components'
import BaseSelect, { Props as SelectProps, Styles, Theme, components, createFilter, mergeStyles } from 'react-select'
import BaseCreatableSelect, { Props as CreatableSelectProps, makeCreatableSelect } from 'react-select/creatable'
import BaseAsyncSelect, { Props as AsyncSelectProps } from 'react-select/async'
import { getThemeColor, colors } from './Theme';
import {Label} from './Label'
import { document } from '../utils';

type AdditionalSKUSelectProps = {
  noMargin?: boolean,
  error?: boolean,
  menuRelative?: boolean, // fix for scroll menu inside scroll container like popup
  inPopup?:boolean,
}

type SKUSelectProps = AdditionalSKUSelectProps & SelectProps

type SKUSelectStylesProps = SKUSelectProps | AsyncSelectProps<{[key: string]: any}> | CreatableSelectProps<{[key: string]: any}>

const popupStyles: SelectProps = {
  menuPlacement: 'auto',
  menuPosition: 'fixed',
  menuPortalTarget: document.body,
}

function skuSelectStyles(props: SKUSelectStylesProps): Styles {
  return {
    option: (provided, state) => {
      let optionStyle = {};
      if (state.data && state.data.styles) {
        optionStyle = state.data.styles;
      }
      return ({
        ...provided,
        ...optionStyle,
        borderBottom: 'none',
        padding: 10,
      });
    },
    input: (provided, state) => {
      return {
      ...provided,
      height: 'auto',
      borderColor: props.error
        ? getThemeColor(props, 'select.error.border', colors.select.error.border)
        : getThemeColor(props, 'select.border', colors.select.border)
    }},
    control: (provided, state) => {
      const controlStyles: React.CSSProperties = {
        marginBottom: (props.noMargin ? 0 : '1rem'),
      };
      if (props.error) {
        controlStyles['borderColor'] = getThemeColor(props, 'select.error.border', colors.select.error.border);
      } else if (state.menuIsOpen && state.isFocused) {
        controlStyles['borderColor'] = getThemeColor(props, 'select.active.border', colors.select.active.border);
      } else {
        controlStyles['borderColor'] = provided.borderColor;
      }
      return ({
        ...provided,
        ...controlStyles,
      });
    },
    menu: (provided, state) => {
      return ({
        ...provided,
        border: 'none',
        zIndex: 10,
        position: props.menuRelative ? 'relative' : provided.position,
      });
    },
    menuPortal: (provided, state) => ({
      ...provided,
      zIndex: 9999,
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  };
}

const skuSelectTheme = (theme: Theme) => ({
  ...theme,
  borderRadius: 5,
  colors: {
    ...theme.colors,
    primary25: colors.primary0,
    primary75: colors.primary0,
    primary50: colors.primary10,
    primary: colors.primary,
    neutral20: colors.select.border,
    neutral30: colors.select.border,
    neutral80: colors.textbody,
    neutral90: colors.textbody
  },
})

// duplicate styles to overide .resku global styles
const SKUSelect = styled(
  React.forwardRef((
    {noMargin, menuRelative, inPopup, error, ...props}: SKUSelectProps,
    ref: React.Ref<BaseSelect>
  ) => {
    return <BaseSelect 
      ref={ref}
      classNamePrefix="commonsku-styles-select"
      {...(inPopup ? popupStyles : {})}
      noMargin={noMargin}
      menuRelative={menuRelative}
      error={error}
      styles={skuSelectStyles(props)}
      theme={skuSelectTheme}
      {...props}
    />
  })
)`
  &&& {
    .commonsku-styles-select__option {
      border-bottom: none;
      padding: 10px;
    }

    .commonsku-styles-select__value-container {
      padding: 2px 8px;
    }

    .commonsku-styles-select__input {
      height: auto;
      border-color: ${(props) => getThemeColor(props, 'select.active.border')};

      input {
        height: auto;
      }
    }

    .commonsku-styles-select__control {
      margin-bottom: ${(props) => props.noMargin ? 0 : '1rem'};

      .commonsku-styles-select__indicator.commonsku-styles-select__dropdown-indicator {
        color: ${p =>
          p.error ? getThemeColor(p, 'select.dropdownIcon.error.color')
            : getThemeColor(p, 'select.dropdownIcon.color')
        };
      }

      .commonsku-styles-select__indicator.commonsku-styles-select__clear-indicator {
        color: ${p => getThemeColor(p, 'select.clearIcon.color')};
      }

      :hover {
        border-color: ${p =>
          p.error ? getThemeColor(p, 'select.error.border')
            : getThemeColor(p, 'select.active.border')
        };

        .commonsku-styles-select__indicator.commonsku-styles-select__dropdown-indicator {
          color: ${p =>
            p.error ? getThemeColor(p, 'select.dropdownIcon.error.color')
              : getThemeColor(p, 'select.dropdownIcon.color')
          };
        }

        .commonsku-styles-select__indicator.commonsku-styles-select__clear-indicator {
          color: ${p => getThemeColor(p, 'select.clearIcon.color')};
        }
      }

      &.commonsku-styles-select__control--is-disabled {
        background-color: ${(props) => getThemeColor(props, 'select.disabled.background')};
        border-color: ${(props) => getThemeColor(props, 'select.disabled.border')};
  
        .commonsku-styles-select__indicator.commonsku-styles-select__dropdown-indicator {
          color: ${p => getThemeColor(p, 'select.dropdownIcon.disabled')};
        }
      }
    }

    div.commonsku-styles-select__control.commonsku-styles-select__control--is-focused.commonsku-styles-select__control--menu-is-open {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border: 2px solid ${p =>
        p.error ? getThemeColor(p, 'select.error.border')
          : getThemeColor(p, 'select.active.border')
      };

      .commonsku-styles-select__indicator.commonsku-styles-select__dropdown-indicator {
        color: ${p =>
          p.error ? getThemeColor(p, 'select.dropdownIcon.error.color')
              : getThemeColor(p, 'select.dropdownIcon.color')
        };
      }

      .commonsku-styles-select__indicator.commonsku-styles-select__clear-indicator {
        color: ${p => getThemeColor(p, 'select.clearIcon.color')};
      }
    }

    .commonsku-styles-select__menu {
      border: 2px solid ${p =>
        p.error ? getThemeColor(p, 'select.error.border')
          : getThemeColor(p, 'select.active.border')
      };
      border-radius: 5px;
      z-index: 10;
      margin-top: 0px;
      border-top: none;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      ${(props) => props.menuRelative ? 'position: relative;' : ''}
    }

    .commonsku-styles-select__menu-list {
      padding-bottom: 0px;
    }

    .commonsku-styles-select__menuPortal {
      zIndex: 9999;
    }

    .commonsku-styles-select__indicatorSeparator {
      display: none;
    }

    ${props => !props.error ? '' : `
      .commonsku-styles-select__input, .commonsku-styles-select__control {
        border-color: ${getThemeColor(props, 'select.error.border', colors.select.error.border)};
      }
    `}
  }
`;

const LabeledSelect = ({ parentStyle, ...props }: SKUSelectProps & {parentStyle?:object}) => {
  return (
    <div style={parentStyle}>
      <Label htmlFor={props.name}>{props.label} {props.required && '*'}</Label>
      <SKUSelect {...props}/>
    </div>
  )
}

const SKUCreatableSelect = ({noMargin, menuRelative, inPopup, ...props}: AdditionalSKUSelectProps & CreatableSelectProps<{[key: string]: any}>) =>
  // @ts-ignore
  <BaseCreatableSelect 
    {...(inPopup ? popupStyles : {})}
    styles={skuSelectStyles(props)}
    theme={skuSelectTheme}
    {...props}
  />;

const LabeledCreatableSelect = ({ parentStyle, ...props }: AdditionalSKUSelectProps & CreatableSelectProps<{[key: string]: any}> & {parentStyle?:object}) => {
  return (
    <div style={parentStyle}>
      <Label htmlFor={props.name}>{props.label} {props.required && '*'}</Label>
      <SKUCreatableSelect {...props}/>
    </div>
  )
}


const SKUAsyncSelect = ({noMargin, menuRelative, inPopup, ...props}: AdditionalSKUSelectProps & AsyncSelectProps<{[key: string]: any}>) =>
  // @ts-ignore
  <BaseAsyncSelect 
    {...(inPopup ? popupStyles : {})}
    styles={skuSelectStyles(props)}
    theme={skuSelectTheme}
    {...props}
  />;

const LabeledAsyncSelect = ({ parentStyle, ...props }: AdditionalSKUSelectProps & AsyncSelectProps<{[key: string]: any}> & {parentStyle?:object}) => {
  return (
    <div style={parentStyle}>
      <Label htmlFor={props.name}>{props.label} {props.required && '*'}</Label>
      <SKUAsyncSelect {...props}/>
    </div>
  )
}

export {
  SKUSelect as Select,
  LabeledSelect,
  SKUCreatableSelect as CreatableSelect,
  LabeledCreatableSelect,
  SKUAsyncSelect as AsyncSelect,
  LabeledAsyncSelect,
  components,
  makeCreatableSelect,
  createFilter,
  mergeStyles,
};
