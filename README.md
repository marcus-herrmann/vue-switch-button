[![npm version](https://badge.fury.io/js/vue-switch-button.svg)](https://badge.fury.io/js/vue-switch-button)

# Vue Switch Button

Accessible toggle switch button, see https://inclusive-components.design/toggle-button/

![Screenshot](https://i.imgur.com/6tI3r2i.png)

[**Demo**](https://codesandbox.io/s/24pq29w23p)

## Installation:
```bash
npm install vue-switch-button --save
```

## Usage
```xml
<switch-button value="true"> 
    Notify by mounted messenger
</switch-button>

<switch-button v-model="email">
    Notify by email
</switch-button>

<switch-button v-model="pidgeon" on-label="Yes" off-label="No">
  Notify by pidgeon
</switch-button>

```

## Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| value     | Boolean           | false       | Initial state of the toggle button |
| onLabel   | String            | "on"        | Label for checked state |
| offLabel   | String            | "off"        | Label for unchecked state |

## Events

| Name   | Description              |
| ---    | ---                      |
| change | Triggered whenever state of the component changes. |
