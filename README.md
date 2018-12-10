
# Icon Components

Convert .svg files to optimized, react components

<!-- ## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

git clone https://github.com/yabdabs/icon-components.git -->

### Importing SVG Components

'Svg' is prepended to all the svg icon names. To import..

```
import { SvgAccordionCollapse } from 'icon-components'
```

render as a react component in your JSX

```
<SvgAccordionCollapse />
```

## The Process

#### Original SVG (AccordionCollapse)
```
<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
    <title>Icon / Accordion / Collapse - small</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <rect id="path-1" class="path-01" x="6" y="11" width="12" height="2" rx="1"></rect>
    </defs>
    <g id="Style-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Style_Icons" transform="translate(-197.000000, -1320.000000)">
            <g id="Accordion" transform="translate(165.000000, 1248.000000)">
                <g id="Icon-/-Accordion-/-Collapse---small" transform="translate(32.000000, 72.000000)">
                    <mask id="mask-2" fill="white">
                        <use xlink:href="#path-1"></use>
                    </mask>
                    <use id="Combined-Shape" fill="#009BDF" xlink:href="#path-1"></use>
                    <g id="Color-/-Global-Grey---medium-dark" mask="url(#mask-2)" fill="#747981">
                        <rect id="color" x="0" y="0" width="24" height="24"></rect>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
```

#### SVG after optimizations using svgo
```
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>
        Icon / Accordion / Collapse - small
    </title>
    <defs>
        <rect id="Accordion-Collapse_svg__a" class="Accordion-Collapse_svg__path-01" x="6" y="11" width="12" height="2" rx="1"/>
    </defs>
    <g fill-rule="evenodd">
        <mask id="Accordion-Collapse_svg__b">
            <use xlink:href="#Accordion-Collapse_svg__a"/>
        </mask>
        <use xlink:href="#Accordion-Collapse_svg__a"/>
        <g mask="url(#Accordion-Collapse_svg__b)">
            <rect width="24" height="24"/>
        </g>
    </g>
</svg>
```


#### SVG after being converted into a react component by svgr
```
import React from "react";

const SvgAccordionCollapse = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Accordion / Collapse - small\n    "}</title>
    <defs>
      <rect
        id="Accordion-Collapse_svg__a"
        className="Accordion-Collapse_svg__path-01"
        x={6}
        y={11}
        width={12}
        height={2}
        rx={1}
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Accordion-Collapse_svg__b">
        <use xlinkHref="#Accordion-Collapse_svg__a" />
      </mask>
      <use xlinkHref="#Accordion-Collapse_svg__a" />
      <g mask="url(#Accordion-Collapse_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgAccordionCollapse;
```


## Built With

* [@svgr/cli](https://www.smooth-code.com/open-source/svgr/docs/cli/) - cli used to convert svgs to react components
* [webpack](https://github.com/webpack/webpack) - To bundle our code for importing
* [svgo](https://github.com/svg/svgo) - Tool for optimizing JS files

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

<!-- ## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).  -->

<!-- ## Authors

* **Abdul Khan** - *Initial work* - [yabdabs](https://github.com/yabdabs)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->
<!-- 
## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc -->
