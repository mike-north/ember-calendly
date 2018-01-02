declare module 'calendly' {
  interface BadgeWidgetOptions {
    url?: string;
    text?: string;
    color?: string;
    branding?: string;
  }
  export function createInlineWidgets(): void;
  export function showPopupWidget(url: string): void;
  export function closePopupWidget(): void;
  export function destroyBadgeWiget(): void;
  export function initBadgeWidget(opts: BadgeWidgetOptions): void;
}

declare module 'ember-calendly/components/calendly-popup-widget' {
  import Component from '@ember/component';
  export default class extends Component {
    url: string;
    text: string;
    branding: boolean;
    color: string;
  }
}

declare module 'ember-calendly/components/calendly-popup-text' {
  import Component from '@ember/component';
  export default class extends Component {
    url: string;
  }
}

declare module 'ember-calendly/components/calendly-inline' {
  import Component from '@ember/component';
  export default class extends Component {
    url: string;
    style: { [k: string]: string|number|boolean }
  }
}